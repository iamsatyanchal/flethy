export type TAG = 'web2' | 'web3' | 'nft'
export type CATEGORY =
  | 'communication'
  | 'storage'
  | 'aggregation'
  | 'gateway'
  | 'versioncontrol'
  | 'collaboration'
  | 'analytics'
  | 'tools'
  | 'marketing'
  | 'automation'
  | 'utils'
  | 'defi'
  | 'books'
  | 'finance'
  | 'data'
  | 'cloud'
  | 'search'
  | 'network'
  | 'identity'
  | 'career'
export type TYPE =
  | COMM_TYPE
  | STORAGE_TYPE
  | AGGREGATION_TYPE
  | GATEWAY_TYPE
  | VERSION_CONTROL_TYPE
  | COLLAB_TYPE
  | ANALYTICS_TYPE
  | TOOLS_TYPE
  | MARKETING_TYPE
  | AUTOMATION_TYPE
  | UTILS_TYPE
  | DEFI_TYPE
  | BOOKS_TYPE
  | FINANCE_TYPE
  | DATA_TYPE
  | CLOUD_TYPE
  | SEARCH_TYPE
  | NETWORK_TYPE
  | IDENTITY_TYPE
  | CAREER_TYPE

export type COMM_TYPE = 'email' | 'messenger'
export type STORAGE_TYPE = 'ipfs' | 'database'
export type AGGREGATION_TYPE =
  | 'indexer'
  | 'transactions'
  | 'prices'
  | 'businessdata'
export type GATEWAY_TYPE = 'httpProvider'
export type VERSION_CONTROL_TYPE = 'hosted'
export type COLLAB_TYPE = 'spreadsheet' | 'notes' | 'issueticketing'
export type ANALYTICS_TYPE = 'webinsights'
export type TOOLS_TYPE = 'cron'
export type MARKETING_TYPE =
  | 'inbound'
  | 'content'
  | 'socialmedia'
  | 'crm'
  | 'media'
export type AUTOMATION_TYPE = 'workflows' | 'decisions'
export type UTILS_TYPE =
  | 'emailverification'
  | 'documentsigning'
  | 'other'
  | 'calendar'
export type DEFI_TYPE = 'liquidity'
export type BOOKS_TYPE = 'index'
export type FINANCE_TYPE = 'currency'
export type DATA_TYPE = 'validation' | 'resolution'
export type CLOUD_TYPE = 'services'
export type SEARCH_TYPE = 'serp'
export type NETWORK_TYPE = 'cdn'
export type IDENTITY_TYPE = 'identitymanagement'
export type CAREER_TYPE = 'job-listings'
