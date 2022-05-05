import { RequestParams } from '../types/Request.types'
import { ApiDescription } from '../types/ApiDescription.type'

export namespace Etherscan {
  export type Entity = { accounts }
  export type Endpoint = { balanceSingleAddress }

  export interface AccountsBalanceSingleAddress extends RequestParams {
    kind: 'etherscan.accounts.balanceSingleAddress'
    'query:tag': 'latest' | 'earliest' | 'pending'
    'query:address': string
    'auth:apikey': string
  }

  export const API: ApiDescription<Entity, Endpoint> = {
    meta: {
      id: 'etherscan',
      name: 'Etherscan',
      url: 'https://etherscan.io',
      docs: 'https://docs.etherscan.io/',
      tags: ['web3'],
      category: 'aggregation',
      type: 'indexer',
    },
    base: 'https://api.etherscan.io/api',
    auth: {
      apikey: { type: 'query' },
    },
    api: {
      accounts: {
        balanceSingleAddress: {
          meta: {
            title: 'Get Ether Balance for a Single Address',
            description: 'Returns the Ether balance of a given address.',
            docs: 'https://docs.etherscan.io/api-endpoints/accounts#get-ether-balance-for-a-single-address',
          },
          method: 'GET',
          query: {
            module: 'account',
            action: 'balance',
          },
        },
      },
    },
  }
}

export default Etherscan
