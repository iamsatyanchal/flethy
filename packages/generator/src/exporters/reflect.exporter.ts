import { getType, Type } from 'tst-reflect'
import { Ably } from '../../../http-configs/src/configs/ably.config'
import { AbstractApi } from '../../../http-configs/src/configs/abstractapi.config'
import { Airtable } from '../../../http-configs/src/configs/airtable.config'
import { Alchemy } from '../../../http-configs/src/configs/alchemy.config'
import { ApicAgent } from '../../../http-configs/src/configs/apicagent.config'
import { Apify } from '../../../http-configs/src/configs/apify.config'
import { APITemplateIo } from '../../../http-configs/src/configs/apitemplateio.config'
import { Auth0 } from '../../../http-configs/src/configs/auth0.config'
import { BambooHR } from '../../../http-configs/src/configs/bamboohr.config'
import { BaseRow } from '../../../http-configs/src/configs/baserow.config'
import { BigDataCloud } from '../../../http-configs/src/configs/bigdatacloud.config'
import { Bitly } from '../../../http-configs/src/configs/bitly.config'
import { Brandfetch } from '../../../http-configs/src/configs/brandfetch.config'
import { BrowsersFyi } from '../../../http-configs/src/configs/browsersfyi.config'
import { Bruzu } from '../../../http-configs/src/configs/bruzu.config'
import { CalCom } from '../../../http-configs/src/configs/calcom.config'
import { Calendarific } from '../../../http-configs/src/configs/calendarific.config'
import { Camunda } from '../../../http-configs/src/configs/camunda.config'
import { Canny } from '../../../http-configs/src/configs/canny.config'
import { ChartMogul } from '../../../http-configs/src/configs/chartmogul.config'
import { Carifai } from '../../../http-configs/src/configs/clarifai.config'
import { Clearbit } from '../../../http-configs/src/configs/clearbit.config'
import { ClickUp } from '../../../http-configs/src/configs/clickup.config'
import { Clockify } from '../../../http-configs/src/configs/clockify.config'
import { CoinCap } from '../../../http-configs/src/configs/coincap.config'
import { CoinGecko } from '../../../http-configs/src/configs/coingecko.config'
import { Coinlayer } from '../../../http-configs/src/configs/coinlayer.config'
import { CoinMarketCap } from '../../../http-configs/src/configs/coinmarketcap.config'
import { ContentFul } from '../../../http-configs/src/configs/contentful.config'
import { ConvertKit } from '../../../http-configs/src/configs/convertkit.config'
import { CountApi } from '../../../http-configs/src/configs/countapi.config'
import { Courier } from '../../../http-configs/src/configs/courier.config'
import { Covalent } from '../../../http-configs/src/configs/covalent.config'
import { CurrencyScoop } from '../../../http-configs/src/configs/currencyscoop.config'
import { DatoCMS } from '../../../http-configs/src/configs/datocms.config'
import { DeepL } from '../../../http-configs/src/configs/deepl.config'
import { DevTo } from '../../../http-configs/src/configs/devto.config'
import { Dhl } from '../../../http-configs/src/configs/dhl.config'
import { Disify } from '../../../http-configs/src/configs/disify.config'
import { Doppler } from '../../../http-configs/src/configs/doppler.config'
import { DynaPictures } from '../../../http-configs/src/configs/dynapictures.config'
import { Etherscan } from '../../../http-configs/src/configs/etherscan.config'
import { Eventbrite } from '../../../http-configs/src/configs/eventbrite.config'
import { Fauna } from '../../../http-configs/src/configs/fauna.config'
import { Frankfurter } from '../../../http-configs/src/configs/frankfurter.config'
import { Geekflare } from '../../../http-configs/src/configs/geekflare.config'
import { Github } from '../../../http-configs/src/configs/github.config'
import { GrafBase } from '../../../http-configs/src/configs/grafbase.config'
import { GraphJSON } from '../../../http-configs/src/configs/graphjson.config'
import { Grist } from '../../../http-configs/src/configs/grist.config'
import { HackerNews } from '../../../http-configs/src/configs/hackernews.config'
import { Harvest } from '../../../http-configs/src/configs/harvest.config'
import { Hashnode } from '../../../http-configs/src/configs/hashnode.config'
import { HelloSign } from '../../../http-configs/src/configs/hellosign.config'
import { HostIo } from '../../../http-configs/src/configs/hostio.config'
import { Hubspot } from '../../../http-configs/src/configs/hubspot.config'
import { HunterIo } from '../../../http-configs/src/configs/hunterio.config'
import { Hybiscus } from '../../../http-configs/src/configs/hybiscus.config'
import { Jira } from '../../../http-configs/src/configs/jira.config'
import { Klaviyo } from '../../../http-configs/src/configs/klaviyo.config'
import { Linear } from '../../../http-configs/src/configs/linear.config'
import { LinkedIn } from '../../../http-configs/src/configs/linkedin.config'
import { Lokalise } from '../../../http-configs/src/configs/lokalise.config'
import { MailboxValidator } from '../../../http-configs/src/configs/mailboxvalidator.config'
import { MailCheckAi } from '../../../http-configs/src/configs/mailcheckai.config'
import { MailerSend } from '../../../http-configs/src/configs/mailersend.config'
import { MailPace } from '../../../http-configs/src/configs/mailpace.config'
import { Medium } from '../../../http-configs/src/configs/medium.config'
import { Mergent } from '../../../http-configs/src/configs/mergent.config'
import { Mezmo } from '../../../http-configs/src/configs/mezmo.config'
import { MicroDev } from '../../../http-configs/src/configs/microdev.config'
import { Microlink } from '../../../http-configs/src/configs/microlink.config'
import { Mixpanel } from '../../../http-configs/src/configs/mixpanel.config'
import { MojoAuth } from '../../../http-configs/src/configs/mojoauth.config'
import { Nasa } from '../../../http-configs/src/configs/nasa.config'
import { NewRelic } from '../../../http-configs/src/configs/newrelic.config'
import { NewsApi } from '../../../http-configs/src/configs/newsapi.config'
import { Notion } from '../../../http-configs/src/configs/notion.config'
import { OCRSpace } from '../../../http-configs/src/configs/ocrspace.config'
import { OneInch } from '../../../http-configs/src/configs/oneinch.config'
import { OpenLibrary } from '../../../http-configs/src/configs/openlibrary.config'
import { OpenSea } from '../../../http-configs/src/configs/opensea.config'
import { OpenWeatherMap } from '../../../http-configs/src/configs/openweathermap.config'
import { Ortto } from '../../../http-configs/src/configs/ortto.config'
import { PayPal } from '../../../http-configs/src/configs/paypal.config'
import { Peekalink } from '../../../http-configs/src/configs/peekalink.config'
import { Personio } from '../../../http-configs/src/configs/personio.config'
import { Pinata } from '../../../http-configs/src/configs/pinata.config'
import { Pixela } from '../../../http-configs/src/configs/pixela.config'
import { PostHog } from '../../../http-configs/src/configs/posthog.config'
import { PurgoMalum } from '../../../http-configs/src/configs/purgomalum.config'
import { RapidApi } from '../../../http-configs/src/configs/rapidapi.config'
import { RedisCloud } from '../../../http-configs/src/configs/rediscloud.config'
import { RemoteOk } from '../../../http-configs/src/configs/remoteok.config'
import { RemoveBg } from '../../../http-configs/src/configs/removebg.config'
import { SendGrid } from '../../../http-configs/src/configs/sendgrid.config'
import { Sentry } from '../../../http-configs/src/configs/sentry.config'
import { SerpApi } from '../../../http-configs/src/configs/serpapi.config'
import { SerpStack } from '../../../http-configs/src/configs/serpstack.config'
import { Shortcut } from '../../../http-configs/src/configs/shortcut.config'
import { Shrtcode } from '../../../http-configs/src/configs/shrtcode.config'
import { Slack } from '../../../http-configs/src/configs/slack.config'
import { Stackby } from '../../../http-configs/src/configs/stackby.config'
import { Statically } from '../../../http-configs/src/configs/statically.config'
import { Supabase } from '../../../http-configs/src/configs/supabase.config'
import { Tenderly } from '../../../http-configs/src/configs/tenderly.config'
import { TheGraph } from '../../../http-configs/src/configs/thegraph.config'
import { TMDB } from '../../../http-configs/src/configs/tmdb.config'
import { Trello } from '../../../http-configs/src/configs/trello.config'
import { Tribe } from '../../../http-configs/src/configs/tribe.config'
import { Twilio } from '../../../http-configs/src/configs/twilio.config'
import { Typeform } from '../../../http-configs/src/configs/typeform.config'
import { Unavatar } from '../../../http-configs/src/configs/unavatar.config'
import { Unsplash } from '../../../http-configs/src/configs/unsplash.config'
import { Up42 } from '../../../http-configs/src/configs/up42.config'
import { UptimeRobot } from '../../../http-configs/src/configs/uptimerobot.config'
import { UrlScan } from '../../../http-configs/src/configs/urlscan.config'
import { UsePlunk } from '../../../http-configs/src/configs/useplunk.config'
import { Web3Storage } from '../../../http-configs/src/configs/web3storage.config'
import { WhoIsXMLApi } from '../../../http-configs/src/configs/whoisxmlapi.config'
import { WordSimi } from '../../../http-configs/src/configs/wordsimi.config'
import { ZeroX } from '../../../http-configs/src/configs/zerox.config'
import { Zora } from '../../../http-configs/src/configs/zora.config'
export const configTypes: Array<{type: Type; name: string; interface: string}> = []
configTypes.push({type: getType<Ably.PublishMessage>(), name: 'Ably', interface: 'PublishMessage'})
configTypes.push({type: getType<AbstractApi.GetPublicHolidays>(), name: 'AbstractApi', interface: 'GetPublicHolidays'})
configTypes.push({type: getType<Airtable.ListTableRecords>(), name: 'Airtable', interface: 'ListTableRecords'})
configTypes.push({type: getType<Airtable.CreateTableRecords>(), name: 'Airtable', interface: 'CreateTableRecords'})
configTypes.push({type: getType<Alchemy.NftGetNFTs>(), name: 'Alchemy', interface: 'NftGetNFTs'})
configTypes.push({type: getType<ApicAgent.Get>(), name: 'ApicAgent', interface: 'Get'})
configTypes.push({type: getType<ApicAgent.Post>(), name: 'ApicAgent', interface: 'Post'})
configTypes.push({type: getType<Apify.ListActors>(), name: 'Apify', interface: 'ListActors'})
configTypes.push({type: getType<APITemplateIo.CreateImage>(), name: 'APITemplateIo', interface: 'CreateImage'})
configTypes.push({type: getType<Auth0.GetAuthAccessToken>(), name: 'Auth0', interface: 'GetAuthAccessToken'})
configTypes.push({type: getType<Auth0.GetUsersByEmail>(), name: 'Auth0', interface: 'GetUsersByEmail'})
configTypes.push({type: getType<Auth0.ListOrSearchUsers>(), name: 'Auth0', interface: 'ListOrSearchUsers'})
configTypes.push({type: getType<Auth0.GetUser>(), name: 'Auth0', interface: 'GetUser'})
configTypes.push({type: getType<BambooHR.EmployeesDirectory>(), name: 'BambooHR', interface: 'EmployeesDirectory'})
configTypes.push({type: getType<BaseRow.CreateRow>(), name: 'BaseRow', interface: 'CreateRow'})
configTypes.push({type: getType<BaseRow.GetRows>(), name: 'BaseRow', interface: 'GetRows'})
configTypes.push({type: getType<BigDataCloud.ReverseGeoCodeClient>(), name: 'BigDataCloud', interface: 'ReverseGeoCodeClient'})
configTypes.push({type: getType<Bitly.CreateShortLink>(), name: 'Bitly', interface: 'CreateShortLink'})
configTypes.push({type: getType<Brandfetch.BrandByDomainOrId>(), name: 'Brandfetch', interface: 'BrandByDomainOrId'})
configTypes.push({type: getType<BrowsersFyi.Get>(), name: 'BrowsersFyi', interface: 'Get'})
configTypes.push({type: getType<Bruzu.CreateImage>(), name: 'Bruzu', interface: 'CreateImage'})
configTypes.push({type: getType<CalCom.FindAllAvailabilities>(), name: 'CalCom', interface: 'FindAllAvailabilities'})
configTypes.push({type: getType<CalCom.FindAnAvailability>(), name: 'CalCom', interface: 'FindAnAvailability'})
configTypes.push({type: getType<CalCom.CreateAvailability>(), name: 'CalCom', interface: 'CreateAvailability'})
configTypes.push({type: getType<CalCom.FindAllEventTypes>(), name: 'CalCom', interface: 'FindAllEventTypes'})
configTypes.push({type: getType<Calendarific.GetHolidays>(), name: 'Calendarific', interface: 'GetHolidays'})
configTypes.push({type: getType<Calendarific.GetCountries>(), name: 'Calendarific', interface: 'GetCountries'})
configTypes.push({type: getType<Calendarific.GetLanguages>(), name: 'Calendarific', interface: 'GetLanguages'})
configTypes.push({type: getType<Camunda.ConsoleToken>(), name: 'Camunda', interface: 'ConsoleToken'})
configTypes.push({type: getType<Camunda.ConsoleGetClusters>(), name: 'Camunda', interface: 'ConsoleGetClusters'})
configTypes.push({type: getType<Camunda.ConsoleGetClustersParameters>(), name: 'Camunda', interface: 'ConsoleGetClustersParameters'})
configTypes.push({type: getType<Camunda.ConsoleDeleteCluster>(), name: 'Camunda', interface: 'ConsoleDeleteCluster'})
configTypes.push({type: getType<Camunda.ConsoleCreateCluster>(), name: 'Camunda', interface: 'ConsoleCreateCluster'})
configTypes.push({type: getType<Camunda.ConsoleGetClients>(), name: 'Camunda', interface: 'ConsoleGetClients'})
configTypes.push({type: getType<Camunda.ConsoleCreateClient>(), name: 'Camunda', interface: 'ConsoleCreateClient'})
configTypes.push({type: getType<Camunda.ConsoleGetClient>(), name: 'Camunda', interface: 'ConsoleGetClient'})
configTypes.push({type: getType<Camunda.ConsoleDeleteClient>(), name: 'Camunda', interface: 'ConsoleDeleteClient'})
configTypes.push({type: getType<Canny.ListBoards>(), name: 'Canny', interface: 'ListBoards'})
configTypes.push({type: getType<Canny.RetrieveBoard>(), name: 'Canny', interface: 'RetrieveBoard'})
configTypes.push({type: getType<Canny.ListPosts>(), name: 'Canny', interface: 'ListPosts'})
configTypes.push({type: getType<ChartMogul.TrackLeadAndFreeTrial>(), name: 'ChartMogul', interface: 'TrackLeadAndFreeTrial'})
configTypes.push({type: getType<Carifai.MakePredictions>(), name: 'Carifai', interface: 'MakePredictions'})
configTypes.push({type: getType<Carifai.MakePredictionsWithVersion>(), name: 'Carifai', interface: 'MakePredictionsWithVersion'})
configTypes.push({type: getType<Clearbit.LogoGet>(), name: 'Clearbit', interface: 'LogoGet'})
configTypes.push({type: getType<ClickUp.SpacesGetAll>(), name: 'ClickUp', interface: 'SpacesGetAll'})
configTypes.push({type: getType<ClickUp.ListsGetAllFolderless>(), name: 'ClickUp', interface: 'ListsGetAllFolderless'})
configTypes.push({type: getType<ClickUp.TasksGetAll>(), name: 'ClickUp', interface: 'TasksGetAll'})
configTypes.push({type: getType<Clockify.ProjectsGetAll>(), name: 'Clockify', interface: 'ProjectsGetAll'})
configTypes.push({type: getType<CoinCap.getAssets>(), name: 'CoinCap', interface: 'getAssets'})
configTypes.push({type: getType<CoinCap.getAsset>(), name: 'CoinCap', interface: 'getAsset'})
configTypes.push({type: getType<CoinCap.getAssetHistory>(), name: 'CoinCap', interface: 'getAssetHistory'})
configTypes.push({type: getType<CoinCap.getAssetMarkets>(), name: 'CoinCap', interface: 'getAssetMarkets'})
configTypes.push({type: getType<CoinGecko.ListCoins>(), name: 'CoinGecko', interface: 'ListCoins'})
configTypes.push({type: getType<CoinGecko.CoinsMarkets>(), name: 'CoinGecko', interface: 'CoinsMarkets'})
configTypes.push({type: getType<CoinGecko.CoinById>(), name: 'CoinGecko', interface: 'CoinById'})
configTypes.push({type: getType<CoinGecko.CoinTickersById>(), name: 'CoinGecko', interface: 'CoinTickersById'})
configTypes.push({type: getType<CoinGecko.CoinHistoryById>(), name: 'CoinGecko', interface: 'CoinHistoryById'})
configTypes.push({type: getType<CoinGecko.CoinMarketChartById>(), name: 'CoinGecko', interface: 'CoinMarketChartById'})
configTypes.push({type: getType<CoinGecko.CoinMarketChartRangeById>(), name: 'CoinGecko', interface: 'CoinMarketChartRangeById'})
configTypes.push({type: getType<CoinGecko.GetSimpleSupportedVsCurrencies>(), name: 'CoinGecko', interface: 'GetSimpleSupportedVsCurrencies'})
configTypes.push({type: getType<CoinGecko.GetSimplePrice>(), name: 'CoinGecko', interface: 'GetSimplePrice'})
configTypes.push({type: getType<CoinGecko.GetSimpleTokenPrice>(), name: 'CoinGecko', interface: 'GetSimpleTokenPrice'})
configTypes.push({type: getType<Coinlayer.GetLive>(), name: 'Coinlayer', interface: 'GetLive'})
configTypes.push({type: getType<Coinlayer.GetList>(), name: 'Coinlayer', interface: 'GetList'})
configTypes.push({type: getType<Coinlayer.GetHistorical>(), name: 'Coinlayer', interface: 'GetHistorical'})
configTypes.push({type: getType<CoinMarketCap.CryptocurrencyListingsHistorical>(), name: 'CoinMarketCap', interface: 'CryptocurrencyListingsHistorical'})
configTypes.push({type: getType<CoinMarketCap.CryptocurrencyListingsLatest>(), name: 'CoinMarketCap', interface: 'CryptocurrencyListingsLatest'})
configTypes.push({type: getType<ContentFul.ContentGetSpace>(), name: 'ContentFul', interface: 'ContentGetSpace'})
configTypes.push({type: getType<ContentFul.ContentGetSpaceContentModel>(), name: 'ContentFul', interface: 'ContentGetSpaceContentModel'})
configTypes.push({type: getType<ContentFul.ContentGetSpaceSingleContentType>(), name: 'ContentFul', interface: 'ContentGetSpaceSingleContentType'})
configTypes.push({type: getType<ContentFul.GraphQLbySpace>(), name: 'ContentFul', interface: 'GraphQLbySpace'})
configTypes.push({type: getType<ContentFul.GraphQLbySpaceAndEnvironment>(), name: 'ContentFul', interface: 'GraphQLbySpaceAndEnvironment'})
configTypes.push({type: getType<ConvertKit.GetAccount>(), name: 'ConvertKit', interface: 'GetAccount'})
configTypes.push({type: getType<ConvertKit.ListSubscribers>(), name: 'ConvertKit', interface: 'ListSubscribers'})
configTypes.push({type: getType<CountApi.Get>(), name: 'CountApi', interface: 'Get'})
configTypes.push({type: getType<CountApi.Set>(), name: 'CountApi', interface: 'Set'})
configTypes.push({type: getType<CountApi.Update>(), name: 'CountApi', interface: 'Update'})
configTypes.push({type: getType<CountApi.Hit>(), name: 'CountApi', interface: 'Hit'})
configTypes.push({type: getType<CountApi.Create>(), name: 'CountApi', interface: 'Create'})
configTypes.push({type: getType<CountApi.Info>(), name: 'CountApi', interface: 'Info'})
configTypes.push({type: getType<Courier.Send>(), name: 'Courier', interface: 'Send'})
configTypes.push({type: getType<Covalent.ClassAGetTransactionsForAddress>(), name: 'Covalent', interface: 'ClassAGetTransactionsForAddress'})
configTypes.push({type: getType<Covalent.ClassBGetUniswapV3Pools>(), name: 'Covalent', interface: 'ClassBGetUniswapV3Pools'})
configTypes.push({type: getType<Covalent.PricingGetHistoricalTokenPrices>(), name: 'Covalent', interface: 'PricingGetHistoricalTokenPrices'})
configTypes.push({type: getType<CurrencyScoop.Latest>(), name: 'CurrencyScoop', interface: 'Latest'})
configTypes.push({type: getType<CurrencyScoop.Historical>(), name: 'CurrencyScoop', interface: 'Historical'})
configTypes.push({type: getType<CurrencyScoop.Timeseries>(), name: 'CurrencyScoop', interface: 'Timeseries'})
configTypes.push({type: getType<CurrencyScoop.Currencies>(), name: 'CurrencyScoop', interface: 'Currencies'})
configTypes.push({type: getType<CurrencyScoop.Convert>(), name: 'CurrencyScoop', interface: 'Convert'})
configTypes.push({type: getType<DatoCMS.Query>(), name: 'DatoCMS', interface: 'Query'})
configTypes.push({type: getType<DeepL.TranslatingRequest>(), name: 'DeepL', interface: 'TranslatingRequest'})
configTypes.push({type: getType<DeepL.GlossaryListLanguagePairs>(), name: 'DeepL', interface: 'GlossaryListLanguagePairs'})
configTypes.push({type: getType<DevTo.PostArticle>(), name: 'DevTo', interface: 'PostArticle'})
configTypes.push({type: getType<Dhl.TrackingUnified>(), name: 'Dhl', interface: 'TrackingUnified'})
configTypes.push({type: getType<Disify.CheckSingleDomain>(), name: 'Disify', interface: 'CheckSingleDomain'})
configTypes.push({type: getType<Disify.CheckMassDomain>(), name: 'Disify', interface: 'CheckMassDomain'})
configTypes.push({type: getType<Disify.CheckSingleEmail>(), name: 'Disify', interface: 'CheckSingleEmail'})
configTypes.push({type: getType<Disify.CheckMassEmail>(), name: 'Disify', interface: 'CheckMassEmail'})
configTypes.push({type: getType<Doppler.DownloadSecrets>(), name: 'Doppler', interface: 'DownloadSecrets'})
configTypes.push({type: getType<DynaPictures.GenerateImage>(), name: 'DynaPictures', interface: 'GenerateImage'})
configTypes.push({type: getType<Etherscan.AccountsBalanceSingleAddress>(), name: 'Etherscan', interface: 'AccountsBalanceSingleAddress'})
configTypes.push({type: getType<Eventbrite.ListAttendeeByEventId>(), name: 'Eventbrite', interface: 'ListAttendeeByEventId'})
configTypes.push({type: getType<Eventbrite.GetUserMe>(), name: 'Eventbrite', interface: 'GetUserMe'})
configTypes.push({type: getType<Fauna.GraphQLQuery>(), name: 'Fauna', interface: 'GraphQLQuery'})
configTypes.push({type: getType<Frankfurter.Latest>(), name: 'Frankfurter', interface: 'Latest'})
configTypes.push({type: getType<Frankfurter.Historical>(), name: 'Frankfurter', interface: 'Historical'})
configTypes.push({type: getType<Frankfurter.TimeSeries>(), name: 'Frankfurter', interface: 'TimeSeries'})
configTypes.push({type: getType<Geekflare.BrokenLink>(), name: 'Geekflare', interface: 'BrokenLink'})
configTypes.push({type: getType<Geekflare.DNSRecords>(), name: 'Geekflare', interface: 'DNSRecords'})
configTypes.push({type: getType<Geekflare.Lighthouse>(), name: 'Geekflare', interface: 'Lighthouse'})
configTypes.push({type: getType<Geekflare.Screenshot>(), name: 'Geekflare', interface: 'Screenshot'})
configTypes.push({type: getType<Github.ListRepositoryIssues>(), name: 'Github', interface: 'ListRepositoryIssues'})
configTypes.push({type: getType<GrafBase.GraphQLQuery>(), name: 'GrafBase', interface: 'GraphQLQuery'})
configTypes.push({type: getType<GraphJSON.Log>(), name: 'GraphJSON', interface: 'Log'})
configTypes.push({type: getType<GraphJSON.BulkLog>(), name: 'GraphJSON', interface: 'BulkLog'})
configTypes.push({type: getType<GraphJSON.Data>(), name: 'GraphJSON', interface: 'Data'})
configTypes.push({type: getType<GraphJSON.Visualization>(), name: 'GraphJSON', interface: 'Visualization'})
configTypes.push({type: getType<Grist.AddRecords>(), name: 'Grist', interface: 'AddRecords'})
configTypes.push({type: getType<Grist.FetchRecords>(), name: 'Grist', interface: 'FetchRecords'})
configTypes.push({type: getType<Grist.DescribeDocument>(), name: 'Grist', interface: 'DescribeDocument'})
configTypes.push({type: getType<HackerNews.GetItem>(), name: 'HackerNews', interface: 'GetItem'})
configTypes.push({type: getType<HackerNews.GetUser>(), name: 'HackerNews', interface: 'GetUser'})
configTypes.push({type: getType<HackerNews.GetLive>(), name: 'HackerNews', interface: 'GetLive'})
configTypes.push({type: getType<Harvest.ListProjects>(), name: 'Harvest', interface: 'ListProjects'})
configTypes.push({type: getType<Hashnode.GraphQLQuery>(), name: 'Hashnode', interface: 'GraphQLQuery'})
configTypes.push({type: getType<HelloSign.GetAccount>(), name: 'HelloSign', interface: 'GetAccount'})
configTypes.push({type: getType<HelloSign.SendSignatureRequest>(), name: 'HelloSign', interface: 'SendSignatureRequest'})
configTypes.push({type: getType<HostIo.GetDomain>(), name: 'HostIo', interface: 'GetDomain'})
configTypes.push({type: getType<HostIo.GetDns>(), name: 'HostIo', interface: 'GetDns'})
configTypes.push({type: getType<HostIo.GetRelated>(), name: 'HostIo', interface: 'GetRelated'})
configTypes.push({type: getType<HostIo.GetFull>(), name: 'HostIo', interface: 'GetFull'})
configTypes.push({type: getType<HostIo.GetByFieldValue>(), name: 'HostIo', interface: 'GetByFieldValue'})
configTypes.push({type: getType<Hubspot.OAuthToken>(), name: 'Hubspot', interface: 'OAuthToken'})
configTypes.push({type: getType<Hubspot.FormsSubmit>(), name: 'Hubspot', interface: 'FormsSubmit'})
configTypes.push({type: getType<Hubspot.ContactsCreateOrUpdate>(), name: 'Hubspot', interface: 'ContactsCreateOrUpdate'})
configTypes.push({type: getType<HunterIo.DomainSearch>(), name: 'HunterIo', interface: 'DomainSearch'})
configTypes.push({type: getType<HunterIo.EmailFinder>(), name: 'HunterIo', interface: 'EmailFinder'})
configTypes.push({type: getType<HunterIo.AuthorFinder>(), name: 'HunterIo', interface: 'AuthorFinder'})
configTypes.push({type: getType<HunterIo.EmailVerification>(), name: 'HunterIo', interface: 'EmailVerification'})
configTypes.push({type: getType<Hybiscus.BuildReport>(), name: 'Hybiscus', interface: 'BuildReport'})
configTypes.push({type: getType<Hybiscus.GetReport>(), name: 'Hybiscus', interface: 'GetReport'})
configTypes.push({type: getType<Jira.GetIssue>(), name: 'Jira', interface: 'GetIssue'})
configTypes.push({type: getType<Jira.SearchIssues>(), name: 'Jira', interface: 'SearchIssues'})
configTypes.push({type: getType<Jira.CreateIssue>(), name: 'Jira', interface: 'CreateIssue'})
configTypes.push({type: getType<Klaviyo.TrackProfileActivity>(), name: 'Klaviyo', interface: 'TrackProfileActivity'})
configTypes.push({type: getType<Klaviyo.IdentifyProfile>(), name: 'Klaviyo', interface: 'IdentifyProfile'})
configTypes.push({type: getType<Klaviyo.GetProfileId>(), name: 'Klaviyo', interface: 'GetProfileId'})
configTypes.push({type: getType<Klaviyo.GetProfile>(), name: 'Klaviyo', interface: 'GetProfile'})
configTypes.push({type: getType<Linear.GraphQLQuery>(), name: 'Linear', interface: 'GraphQLQuery'})
configTypes.push({type: getType<LinkedIn.SharePost>(), name: 'LinkedIn', interface: 'SharePost'})
configTypes.push({type: getType<Lokalise.CreateTask>(), name: 'Lokalise', interface: 'CreateTask'})
configTypes.push({type: getType<Lokalise.ListTasks>(), name: 'Lokalise', interface: 'ListTasks'})
configTypes.push({type: getType<Lokalise.ListUsers>(), name: 'Lokalise', interface: 'ListUsers'})
configTypes.push({type: getType<Lokalise.ListTeams>(), name: 'Lokalise', interface: 'ListTeams'})
configTypes.push({type: getType<MailboxValidator.SingleEmailValidation>(), name: 'MailboxValidator', interface: 'SingleEmailValidation'})
configTypes.push({type: getType<MailboxValidator.DisposableEmail>(), name: 'MailboxValidator', interface: 'DisposableEmail'})
configTypes.push({type: getType<MailboxValidator.FreeEmail>(), name: 'MailboxValidator', interface: 'FreeEmail'})
configTypes.push({type: getType<MailCheckAi.CheckDomain>(), name: 'MailCheckAi', interface: 'CheckDomain'})
configTypes.push({type: getType<MailCheckAi.CheckEmail>(), name: 'MailCheckAi', interface: 'CheckEmail'})
configTypes.push({type: getType<MailerSend.EmailSend>(), name: 'MailerSend', interface: 'EmailSend'})
configTypes.push({type: getType<MailPace.Send>(), name: 'MailPace', interface: 'Send'})
configTypes.push({type: getType<Medium.Me>(), name: 'Medium', interface: 'Me'})
configTypes.push({type: getType<Medium.GetPublications>(), name: 'Medium', interface: 'GetPublications'})
configTypes.push({type: getType<Medium.CreatePost>(), name: 'Medium', interface: 'CreatePost'})
configTypes.push({type: getType<Medium.CreatePostUnderPublication>(), name: 'Medium', interface: 'CreatePostUnderPublication'})
configTypes.push({type: getType<Medium.GetContributorsOfPublication>(), name: 'Medium', interface: 'GetContributorsOfPublication'})
configTypes.push({type: getType<Mergent.CreateTask>(), name: 'Mergent', interface: 'CreateTask'})
configTypes.push({type: getType<Mezmo.IngestLogs>(), name: 'Mezmo', interface: 'IngestLogs'})
configTypes.push({type: getType<MicroDev.StorageDbCreateRecord>(), name: 'MicroDev', interface: 'StorageDbCreateRecord'})
configTypes.push({type: getType<MicroDev.StorageDbReadRecord>(), name: 'MicroDev', interface: 'StorageDbReadRecord'})
configTypes.push({type: getType<MicroDev.StorageDbUpdateRecord>(), name: 'MicroDev', interface: 'StorageDbUpdateRecord'})
configTypes.push({type: getType<MicroDev.StorageDbDeleteRecord>(), name: 'MicroDev', interface: 'StorageDbDeleteRecord'})
configTypes.push({type: getType<MicroDev.StorageCacheDecrement>(), name: 'MicroDev', interface: 'StorageCacheDecrement'})
configTypes.push({type: getType<MicroDev.StorageCacheDelete>(), name: 'MicroDev', interface: 'StorageCacheDelete'})
configTypes.push({type: getType<MicroDev.StorageCacheGet>(), name: 'MicroDev', interface: 'StorageCacheGet'})
configTypes.push({type: getType<MicroDev.StorageCacheIncrement>(), name: 'MicroDev', interface: 'StorageCacheIncrement'})
configTypes.push({type: getType<MicroDev.StorageCacheListKeys>(), name: 'MicroDev', interface: 'StorageCacheListKeys'})
configTypes.push({type: getType<MicroDev.StorageCacheSet>(), name: 'MicroDev', interface: 'StorageCacheSet'})
configTypes.push({type: getType<MicroDev.StorageNotesCreate>(), name: 'MicroDev', interface: 'StorageNotesCreate'})
configTypes.push({type: getType<MicroDev.StorageNotesDelete>(), name: 'MicroDev', interface: 'StorageNotesDelete'})
configTypes.push({type: getType<MicroDev.StorageNotesList>(), name: 'MicroDev', interface: 'StorageNotesList'})
configTypes.push({type: getType<MicroDev.StorageNotesRead>(), name: 'MicroDev', interface: 'StorageNotesRead'})
configTypes.push({type: getType<MicroDev.StorageNotesUpdate>(), name: 'MicroDev', interface: 'StorageNotesUpdate'})
configTypes.push({type: getType<Microlink.Url>(), name: 'Microlink', interface: 'Url'})
configTypes.push({type: getType<Mixpanel.TrackEvents>(), name: 'Mixpanel', interface: 'TrackEvents'})
configTypes.push({type: getType<Mixpanel.ImportEvents>(), name: 'Mixpanel', interface: 'ImportEvents'})
configTypes.push({type: getType<MojoAuth.SendMagicLink>(), name: 'MojoAuth', interface: 'SendMagicLink'})
configTypes.push({type: getType<Nasa.AstronomyPictureOfTheDay>(), name: 'Nasa', interface: 'AstronomyPictureOfTheDay'})
configTypes.push({type: getType<NewRelic.InsightsEvents>(), name: 'NewRelic', interface: 'InsightsEvents'})
configTypes.push({type: getType<NewsApi.SearchEverything>(), name: 'NewsApi', interface: 'SearchEverything'})
configTypes.push({type: getType<Notion.CreateDatabase>(), name: 'Notion', interface: 'CreateDatabase'})
configTypes.push({type: getType<OCRSpace.ParseURL>(), name: 'OCRSpace', interface: 'ParseURL'})
configTypes.push({type: getType<OCRSpace.ParseBase64>(), name: 'OCRSpace', interface: 'ParseBase64'})
configTypes.push({type: getType<OneInch.AggregationInfoTokens>(), name: 'OneInch', interface: 'AggregationInfoTokens'})
configTypes.push({type: getType<OneInch.AggregationQuote>(), name: 'OneInch', interface: 'AggregationQuote'})
configTypes.push({type: getType<OneInch.AggregationSwap>(), name: 'OneInch', interface: 'AggregationSwap'})
configTypes.push({type: getType<OpenLibrary.Books>(), name: 'OpenLibrary', interface: 'Books'})
configTypes.push({type: getType<OpenSea.GetAssets>(), name: 'OpenSea', interface: 'GetAssets'})
configTypes.push({type: getType<OpenSea.GetCollections>(), name: 'OpenSea', interface: 'GetCollections'})
configTypes.push({type: getType<OpenWeatherMap.CurrentAndForecast>(), name: 'OpenWeatherMap', interface: 'CurrentAndForecast'})
configTypes.push({type: getType<OpenWeatherMap.Current>(), name: 'OpenWeatherMap', interface: 'Current'})
configTypes.push({type: getType<Ortto.RetrieveOneOrMorePeople>(), name: 'Ortto', interface: 'RetrieveOneOrMorePeople'})
configTypes.push({type: getType<PayPal.AuthRequest>(), name: 'PayPal', interface: 'AuthRequest'})
configTypes.push({type: getType<Peekalink.Preview>(), name: 'Peekalink', interface: 'Preview'})
configTypes.push({type: getType<Peekalink.IsAvailable>(), name: 'Peekalink', interface: 'IsAvailable'})
configTypes.push({type: getType<Personio.AuthRequest>(), name: 'Personio', interface: 'AuthRequest'})
configTypes.push({type: getType<Personio.EmployeesGet>(), name: 'Personio', interface: 'EmployeesGet'})
configTypes.push({type: getType<Personio.AbsencesGet>(), name: 'Personio', interface: 'AbsencesGet'})
configTypes.push({type: getType<Pinata.PinningPinJsonToIPFS>(), name: 'Pinata', interface: 'PinningPinJsonToIPFS'})
configTypes.push({type: getType<Pixela.CreateGraph>(), name: 'Pixela', interface: 'CreateGraph'})
configTypes.push({type: getType<Pixela.GetGraph>(), name: 'Pixela', interface: 'GetGraph'})
configTypes.push({type: getType<Pixela.PostValue>(), name: 'Pixela', interface: 'PostValue'})
configTypes.push({type: getType<PostHog.SendEvent>(), name: 'PostHog', interface: 'SendEvent'})
configTypes.push({type: getType<PurgoMalum.Profanity>(), name: 'PurgoMalum', interface: 'Profanity'})
configTypes.push({type: getType<RapidApi.ArticleExtractor>(), name: 'RapidApi', interface: 'ArticleExtractor'})
configTypes.push({type: getType<RedisCloud.GetCurrentAccount>(), name: 'RedisCloud', interface: 'GetCurrentAccount'})
configTypes.push({type: getType<RemoteOk.GetListings>(), name: 'RemoteOk', interface: 'GetListings'})
configTypes.push({type: getType<RemoveBg.Remove>(), name: 'RemoveBg', interface: 'Remove'})
configTypes.push({type: getType<SendGrid.SendMail>(), name: 'SendGrid', interface: 'SendMail'})
configTypes.push({type: getType<Sentry.QueryDiscoverEvents>(), name: 'Sentry', interface: 'QueryDiscoverEvents'})
configTypes.push({type: getType<Sentry.ListProjects>(), name: 'Sentry', interface: 'ListProjects'})
configTypes.push({type: getType<SerpApi.Search>(), name: 'SerpApi', interface: 'Search'})
configTypes.push({type: getType<SerpStack.Search>(), name: 'SerpStack', interface: 'Search'})
configTypes.push({type: getType<Shortcut.ListCategories>(), name: 'Shortcut', interface: 'ListCategories'})
configTypes.push({type: getType<Shortcut.CreateCategory>(), name: 'Shortcut', interface: 'CreateCategory'})
configTypes.push({type: getType<Shortcut.Search>(), name: 'Shortcut', interface: 'Search'})
configTypes.push({type: getType<Shortcut.SearchEpics>(), name: 'Shortcut', interface: 'SearchEpics'})
configTypes.push({type: getType<Shortcut.SearchStories>(), name: 'Shortcut', interface: 'SearchStories'})
configTypes.push({type: getType<Shrtcode.Shorten>(), name: 'Shrtcode', interface: 'Shorten'})
configTypes.push({type: getType<Shrtcode.Info>(), name: 'Shrtcode', interface: 'Info'})
configTypes.push({type: getType<Slack.IncomingWebhooksMessage>(), name: 'Slack', interface: 'IncomingWebhooksMessage'})
configTypes.push({type: getType<Slack.ChatPostMessage>(), name: 'Slack', interface: 'ChatPostMessage'})
configTypes.push({type: getType<Slack.ConversationsList>(), name: 'Slack', interface: 'ConversationsList'})
configTypes.push({type: getType<Stackby.ListRows>(), name: 'Stackby', interface: 'ListRows'})
configTypes.push({type: getType<Statically.StaticZapGithub>(), name: 'Statically', interface: 'StaticZapGithub'})
configTypes.push({type: getType<Statically.StaticZapGitlab>(), name: 'Statically', interface: 'StaticZapGitlab'})
configTypes.push({type: getType<Statically.StaticZapBitbucket>(), name: 'Statically', interface: 'StaticZapBitbucket'})
configTypes.push({type: getType<Supabase.InsertRows>(), name: 'Supabase', interface: 'InsertRows'})
configTypes.push({type: getType<Supabase.ReadRows>(), name: 'Supabase', interface: 'ReadRows'})
configTypes.push({type: getType<Tenderly.ExecuteTransactionSimulation>(), name: 'Tenderly', interface: 'ExecuteTransactionSimulation'})
configTypes.push({type: getType<TheGraph.QueryById>(), name: 'TheGraph', interface: 'QueryById'})
configTypes.push({type: getType<TheGraph.QueryByName>(), name: 'TheGraph', interface: 'QueryByName'})
configTypes.push({type: getType<TMDB.Trending>(), name: 'TMDB', interface: 'Trending'})
configTypes.push({type: getType<Trello.BoardGetLists>(), name: 'Trello', interface: 'BoardGetLists'})
configTypes.push({type: getType<Trello.CardsCreate>(), name: 'Trello', interface: 'CardsCreate'})
configTypes.push({type: getType<Tribe.TribeAccessToken>(), name: 'Tribe', interface: 'TribeAccessToken'})
configTypes.push({type: getType<Twilio.SendSms>(), name: 'Twilio', interface: 'SendSms'})
configTypes.push({type: getType<Typeform.CreateApiCreateForm>(), name: 'Typeform', interface: 'CreateApiCreateForm'})
configTypes.push({type: getType<Unavatar.FromUsernameEmailDomain>(), name: 'Unavatar', interface: 'FromUsernameEmailDomain'})
configTypes.push({type: getType<Unavatar.FromProvider>(), name: 'Unavatar', interface: 'FromProvider'})
configTypes.push({type: getType<Unsplash.ListPhotos>(), name: 'Unsplash', interface: 'ListPhotos'})
configTypes.push({type: getType<Unsplash.SearchPhotos>(), name: 'Unsplash', interface: 'SearchPhotos'})
configTypes.push({type: getType<Up42.AuthRequest>(), name: 'Up42', interface: 'AuthRequest'})
configTypes.push({type: getType<Up42.CreditsBalance>(), name: 'Up42', interface: 'CreditsBalance'})
configTypes.push({type: getType<Up42.CatalogSearch>(), name: 'Up42', interface: 'CatalogSearch'})
configTypes.push({type: getType<UptimeRobot.GetMonitors>(), name: 'UptimeRobot', interface: 'GetMonitors'})
configTypes.push({type: getType<UrlScan.Submission>(), name: 'UrlScan', interface: 'Submission'})
configTypes.push({type: getType<UrlScan.Result>(), name: 'UrlScan', interface: 'Result'})
configTypes.push({type: getType<UrlScan.Search>(), name: 'UrlScan', interface: 'Search'})
configTypes.push({type: getType<UsePlunk.PostEvent>(), name: 'UsePlunk', interface: 'PostEvent'})
configTypes.push({type: getType<Web3Storage.UploadContent>(), name: 'Web3Storage', interface: 'UploadContent'})
configTypes.push({type: getType<WhoIsXMLApi.DomainAvailability>(), name: 'WhoIsXMLApi', interface: 'DomainAvailability'})
configTypes.push({type: getType<WordSimi.MostSimilarWords>(), name: 'WordSimi', interface: 'MostSimilarWords'})
configTypes.push({type: getType<ZeroX.SwapQuote>(), name: 'ZeroX', interface: 'SwapQuote'})
configTypes.push({type: getType<ZeroX.SwapPrice>(), name: 'ZeroX', interface: 'SwapPrice'})
configTypes.push({type: getType<ZeroX.SwapSources>(), name: 'ZeroX', interface: 'SwapSources'})
configTypes.push({type: getType<Zora.Query>(), name: 'Zora', interface: 'Query'})