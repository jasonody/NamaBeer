using NamaBeer.WebAPI.Models;
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
		private readonly IStyleRepository _styleRepository;

		public StylesController(IStyleRepository styleRepository)
		{
			_styleRepository = styleRepository;
		}

		//[EnableQuery(PageSize=5)]
		public dynamic Get(string term)
		{
			var suggestions = 
				(from style in _styleRepository.Get()
				where style.ToLower().Contains(term.ToLower())
				orderby style
				select style).Take(5);

			return new {
				suggestions = suggestions.ToList()
			}; 
		}
    }
}
