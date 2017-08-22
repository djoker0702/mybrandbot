var app   = require('../app.js');

 let replies = [];
 let reply =
				{
					"content_type": "text",
					"title": "View my List" ,
					"payload": "Brands list"
				}
replies.push(reply);
let reply2 =
				{
					"content_type": "text",
					"title": "Add a brand" ,
					"payload": "Add a brand"
				}
replies.push(reply2);

let reply3 =
				{
					"content_type": "text",
					"title": "Remove a brand" ,
					"payload": "Remove a brand"
				}

replies.push(reply3);



let reply4 =
				{
					"content_type": "text",
					"title": "Check promotions" ,
					"payload": "Check promotions"
				}

replies.push(reply4);

module.exports = replies;