using NamaBeer.WebAPI.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace NamaBeer.WebAPI.Controllers
{
    public class BeersController : ApiController
    {
        // GET: api/Beers
        public IEnumerable<Beer> Get()
        {
			var beerRepository = new BeerRepository();

			return beerRepository.Retrieve();
        }

        // GET: api/Beers/5
        public Beer Get(int id)
        {
			Beer beer = null;
			var beerRepository = new BeerRepository();

			if (id > 0)
			{
				var beers = beerRepository.Retrieve();
				beer = beers.FirstOrDefault(b => b.Id == id);
			}
			else
			{
				beer = beerRepository.Create();
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
