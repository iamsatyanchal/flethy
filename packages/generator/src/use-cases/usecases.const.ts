export const USECASES = [{"id":"create-a-new-user-with-auth0","title":"Create a new User with Auth0","contents":["When building a product or service that requires a user sign-up, it's necessary to interact with an identity management system. Identity is such a critical asset so you should rely on a mature and proven system.","If you're using Auth0 as user management and want to create a new user via the API it's quite easy by using flethy. First, you need to request a token, and second you use this token to create the user."],"services":["auth0"],"kinds":["auth0.auth.accesstoken","auth0.users.create"],"tags":["identity","usermanagement"],"flow":[{"id":"token","config":{"namespace":"token"},"next":[{"id":"createUser"}],"kind":"auth0.auth.accesstoken","body:audience":"==>env==>AUTH0_AUDIENCE","body:grant_type":"client_credentials","body:client_id":"==>secrets==>AUTH0_CLIENT_ID","body:client_secret":"==>secrets==>AUTH0_CLIENT_SECRET","subdomain:tenant":"==>env==>AUTH0_TENANT"},{"id":"createUser","config":{"namespace":"createUser"},"kind":"auth0.users.create","auth:Authorization":"->context.token.access_token->string","subdomain:tenant":"==>env==>AUTH0_TENANT","body:email":"->context.input.email->string","body:family_name":"->context.input.last->string","body:given_name":"->context.input.first->string"}]}]