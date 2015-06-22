using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;
using System.Web.OData;

namespace NamaBeer.WebAPI.Controllers
{
	[EnableCors("*", "*", "*")]
    public class StylesController : ApiController
    {
		[EnableQuery(PageSize=5)]
		public dynamic Get()
		{
			return new {
				suggestions = new List<string> 
				{
					"India Pale Ale",
					"Stout"
				}.AsQueryable()
			}; 
		}
    }
}
