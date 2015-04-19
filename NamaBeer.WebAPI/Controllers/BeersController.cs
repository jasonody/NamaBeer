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
    public class BeersController : ApiController
    {
		private readonly IBeerRepository _beerRepository;

		public BeersController(IBeerRepository beerRepository)
		{
			_beerRepository = beerRepository;
		}

        // GET: api/Beers
		[EnableQuery(PageSize=20)]
        public IQueryable<Beer> Get()
        {
			return _beerRepository.Get().AsQueryable();
        }

        // GET: api/Beers/5
        public Beer Get(int id)
        {
			Beer beer = null;

			if (id > 0)
			{
				var beers = _beerRepository.Get();
				beer = beers.FirstOrDefault(b => b.Id == id);
			}
			else
			{
				beer = new Beer()
				{
					DateOfTasting = DateTime.Now
				};
			}

			return beer;
        }

        // POST: api/Beers
        public void Post([FromBody]string value)
        {
        }

        // PUT: api/Beers/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE: api/Beers/5
        public void Delete(int id)
        {
        }
    }
}
