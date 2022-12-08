import { paginate, write } from "worktop/kv";
import { FlethyProject, FlethyWorkspace } from "../types/general.type";
import { ErrorType, FlethyError } from "../utils/error.utils";
import { KVUtils } from "../utils/kv.utils";
import { ValidationUtils } from "../utils/validation.utils";

// INTERFACES

export interface Token {
  id: string;
  name: string;
}

export interface TokenMetadata {
  tokens: Token[];
}

export interface GetTokensRequest extends FlethyWorkspace, FlethyProject {}

export interface PutTokenRequest extends FlethyWorkspace, FlethyProject {
  token: Token;
}

export interface DeleteTokenRequest extends FlethyWorkspace, FlethyProject {
  tokenId: string;
}

// CONTROLLER

export class TokenController {
  public static async get(request: GetTokensRequest) {
    const validation = ValidationUtils.validateAll([
      {
        value: request.workspaceId,
        parameter: "workspaceId",
        checks: { required: true, minStringLength: 1 },
      },
      {
        value: request.projectId,
        parameter: "projectId",
        checks: { required: true, minStringLength: 1 },
      },
    ]);
    if (!validation.valid) {
      throw new FlethyError({
        message: validation.message,
        type: ErrorType.BadRequest,
        log: {
          message: validation.message,
          context: { method: "get", origin: "token.controller.ts" },
          data: { request },
        },
      });
    }

    const foundWorkflowKeys = await paginate<TokenMetadata>(
      KVUtils.getKV().workspaces,
      {
        prefix: KVUtils.tokenKey(request.workspaceId, request.projectId),
        limit: 1,
        page: 1,
        metadata: true,
      }
    );
    return (
      foundWorkflowKeys
        .filter((data) => data.metadata !== undefined)
        .map((data) => data.metadata) || { tokens: [] }
    );
  }

  public static async put(request: PutTokenRequest) {
    const validation = ValidationUtils.validateAll([
      {
        value: request.workspaceId,
        parameter: "workspaceId",
        checks: { required: true, minStringLength: 1 },
      },
      {
        value: request.projectId,
        parameter: "projectId",
        checks: { required: true, minStringLength: 1 },
      },
      {
        value: request.token?.id,
        parameter: "token.id",
        checks: { required: true, minStringLength: 1 },
      },
      {
        value: request.token?.name,
        parameter: "token.name",
        checks: { required: true, minStringLength: 1 },
      },
    ]);
    if (!validation.valid) {
      throw new FlethyError({
        message: validation.message,
        type: ErrorType.BadRequest,
        log: {
          message: validation.message,
          context: { method: "put", origin: "token.controller.ts" },
          data: { request },
        },
      });
    }

    let currentTokens: any = await this.get(request);
    if (!currentTokens) {
      currentTokens = { tokens: [] };
    }
    currentTokens.tokens.push(request.token);

    const success = await write<{}>(
      KVUtils.getKV().workspaces,
      KVUtils.tokenKey(request.workspaceId, request.projectId),
      {},
      { metadata: { ...currentTokens } }
    );

    return { success, tokens: currentTokens.tokens };
  }

  public static async delete(request: DeleteTokenRequest) {
    const validation = ValidationUtils.validateAll([
      {
        value: request.workspaceId,
        parameter: "workspaceId",
        checks: { required: true, minStringLength: 1 },
      },
      {
        value: request.projectId,
        parameter: "projectId",
        checks: { required: true, minStringLength: 1 },
      },
      {
        value: request.tokenId,
        parameter: "tokenId",
        checks: { required: true, minStringLength: 1 },
      },
    ]);
    if (!validation.valid) {
      throw new FlethyError({
        message: validation.message,
        type: ErrorType.BadRequest,
        log: {
          message: validation.message,
          context: { method: "delete", origin: "token.controller.ts" },
          data: { request },
        },
      });
    }

    let currentTokens: any = await this.get(request);
    if (!currentTokens) {
      currentTokens = { tokens: [] };
    }
    currentTokens.tokens = currentTokens.tokens.filter(
      (currentToken: Token) => currentToken.id !== request.tokenId
    );

    const success = await write<{}>(
      KVUtils.getKV().workspaces,
      KVUtils.tokenKey(request.workspaceId, request.projectId),
      {},
      { metadata: { ...currentTokens } }
    );

    return { success, tokens: currentTokens.tokens };
  }
}