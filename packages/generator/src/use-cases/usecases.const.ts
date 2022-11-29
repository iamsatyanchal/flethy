export const USECASES = [{"id":"add-analytics-event-with-mixpanel","title":"Add analytics event with Mixpanel","contents":["A product should always solve a customer problem. During development, however, it is not always clear how users will use and deploy their own product. All possible areas can be optimized so that users reach their goal faster or understand the product better. In order to have a solid basis on facts and not to use gut feeling, there are analysis tools that help to get a better view on the different topics.","One service in this category is Mixpanel. Mixpanel can receive events from a web application as well as from a backend system. It is all about sending relevant events to Mixpanel. In addition, additional attributes can be stored as context, and an event can be assigned to a specific entity, such as a user.","flethy provides a very simple way to send events to the Mixpanel API. Just configure the node accordingly with the event information and the API key and the flethy engine takes care of the rest."],"services":["mixpanel"],"kinds":["mixpanel.events.track"],"tags":["analytics","webinsights"],"flow":[{"id":"mixpanelSignupEvent","config":{"namespace":"mixpanel"},"kind":"mixpanel.events.track","auth:token":"==>secrets==>MIXPANEL_TOKEN","baseId":"api","body:body":[{"properties":{"distinct_id":"->context.email->string","time":"->context.time->number"},"event":"signup"}]}],"ts":"2022-11-25T00:00:00.000Z"},{"id":"create-a-new-user-with-auth0","title":"Create a new User with Auth0","contents":["When building a product or service that requires a user sign-up, it's necessary to interact with an identity management system. Identity is such a critical asset so you should rely on a mature and proven system.","If you're using Auth0 as user management and want to create a new user via the API it's quite easy by using flethy. First, you need to request a token, and second you use this token to create the user.","The flethy engine takes care of the rest and executes the corresponding requests. The token received from the first node is used as an authorization header in the second node."],"services":["auth0"],"kinds":["auth0.auth.accesstoken","auth0.users.create"],"tags":["identity","usermanagement"],"flow":[{"id":"token","config":{"namespace":"token"},"next":[{"id":"createUser"}],"kind":"auth0.auth.accesstoken","body:audience":"==>env==>AUTH0_AUDIENCE","body:grant_type":"client_credentials","body:client_id":"==>secrets==>AUTH0_CLIENT_ID","body:client_secret":"==>secrets==>AUTH0_CLIENT_SECRET","subdomain:tenant":"==>env==>AUTH0_TENANT"},{"id":"createUser","config":{"namespace":"createUser"},"kind":"auth0.users.create","auth:Authorization":"->context.token.access_token->string","subdomain:tenant":"==>env==>AUTH0_TENANT","body:email":"->context.input.email->string","body:family_name":"->context.input.last->string","body:given_name":"->context.input.first->string"}],"ts":"2022-11-22T00:00:00.000Z"},{"id":"create-new-contact-in-hubspot","title":"Create a new contact in HubSpot","contents":["Marketing is an essential part of any product. An essential prerequisite is to know for whom marketing is necessary. For this, marketing services exist that manage customers, tools for classifying them, and ways to send marketing materials through various channels.","One service in this category is Hubspot. Use Hubspot to create new contacts in the system via the API. As an absolute minimum, only the email address is necessary. In addition, various attributes can be added that are useful for the user entry.","flethy offers a very simple way to create contacts in Hubspot. Just configure the node accordingly with the event information and the API key and the flethy engine takes care of the rest."],"services":["hubspot"],"kinds":["hubspot.contacts.createOrUpdate"],"tags":["crm","contacts"],"flow":[{"kind":"hubspot.contacts.createOrUpdate","auth:Authorization":"==>secrets==>HUBSPOT_TOKEN","param:contact_email":"->context.email->string","body:properties":[{"property":"firstname","value":"->context.first->string"}]}],"ts":"2022-11-26T00:00:00.000Z"},{"id":"create-new-contact-in-sendinblue","title":"Create a new contact in Sendinblue","contents":["Marketing is an essential part of any product. An essential prerequisite is to know for whom marketing is necessary. For this, marketing services exist that manage customers, tools for classifying them, and ways to send marketing materials through various channels.","One service in this category is Sendinblue. Use Sendinblue to create new contacts in the system via the API. As an absolute minimum, only the email address is necessary. In addition, various attributes can be added that are useful for the user entry.","flethy offers a very simple way to create contacts in Sendinblue. Just configure the node accordingly with the event information and the API key and the flethy engine takes care of the rest."],"services":["sendinblue"],"kinds":["sendinblue.contacts.create"],"tags":["crm","contacts"],"flow":[{"kind":"sendinblue.contacts.create","auth:api-key":"==>secrets==>SENDINBLUE_API_KEY","body:email":"->context.email->string","body:attributes":{"FIRSTNAME":"->context.first->string"}}],"ts":"2022-11-27T00:00:00.000Z"},{"id":"get-all-vimeos-in-which-the-user-appears","title":"Get all Vimeos in which the user appears","contents":["Media is an essential part of today's marketing efforts. Video platforms allow you to host, stream, and manage video content through their platforms.","One service in this category is Vimeo. To display all videos in which a user appears, the Vimeo API can be used.","flethy provides a very simple way to retrieve videos from the Vimeo API. Just configure the node accordingly and the Access Token and the flethy engine takes care of the rest."],"services":["vimeo"],"kinds":["vimeo.videos.appearancesMe"],"tags":["videos","media"],"flow":[{"kind":"vimeo.videos.appearancesMe","auth:Authorization":"==>secrets==>VIMEO_ACCESS_TOKEN"}],"ts":"2022-11-28T00:00:00.000Z"},{"id":"get-icons-of-a-collection-from-the-noun-project","title":"Get all icons of a collection from TheNounProject","contents":["Icons are an essential part of web applications. Icon libraries provide glossy icons, so you don't have to design each icon yourself.","One service in this category is TheNounProject. If you want to retrieve all icons from a collection for internal tools, this can be done very easily via the API.","flethy provides a very simple way to retrieve icons from the TheNounProject API. Just configure the node accordingly with the collection Id and the credentials and the flethy engine takes care of the rest."],"services":["thenounproject"],"kinds":["thenounproject.collections.iconsById"],"tags":["icons","media"],"flow":[{"kind":"thenounproject.collections.iconsById","auth:Authorization":{"consumerKey":"==>secrets==>NOUNPROJECT_KEY","consumerSecret":"==>secrets==>NOUNPROJECT_SECRET"},"param:collectionId":"->context.collectionId->number"}],"ts":"2022-11-29T00:00:00.000Z"},{"id":"update-users-app-metadata-with-auth0","title":"Update Users App Metadata with Auth0","contents":["When building a product or service that requires a user sign-up, it's necessary to interact with an identity management system. Identity is such a critical asset so you should rely on a mature and proven system.","A user record in Auth0 contains, among other things, user and app metadata that can be used flexibly. App Metadata are intended as special locations for the associated application, such as references to projects or workspaces. App Metadata can be updated very easily with flethy. The input payload is used to set the App Metadata.","The flethy engine takes care of the rest and executes the corresponding requests. The token received from the first node is used as an authorization header in the second node."],"services":["auth0"],"kinds":["auth0.auth.accesstoken","auth0.users.update"],"tags":["identity","usermanagement"],"flow":[{"id":"token","config":{"namespace":"token"},"next":[{"id":"updateAppMetadata"}],"kind":"auth0.auth.accesstoken","body:audience":"==>env==>AUTH0_AUDIENCE","body:grant_type":"client_credentials","body:client_id":"==>secrets==>AUTH0_CLIENT_ID","body:client_secret":"==>secrets==>AUTH0_CLIENT_SECRET","subdomain:tenant":"==>env==>AUTH0_TENANT"},{"id":"updateAppMetadata","config":{"namespace":"updateAppMetadata"},"kind":"auth0.users.update","auth:Authorization":"->context.token.access_token->string","param:id":"->context.userId->string","subdomain:tenant":"==>env==>AUTH0_TENANT","body:app_metadata":"->context.appMetadata->any"}],"ts":"2022-11-23T00:00:00.000Z"}]