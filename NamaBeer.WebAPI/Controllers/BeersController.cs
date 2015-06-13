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
			
			var beers = _beerRepository.Get();
			beer = beers.FirstOrDefault(b => b.Id == id);

			return beer;
        }

        // POST: api/Beers
		[Authorize]
        public Beer Post([FromBody]Beer beer)
        {
			var addedBeer = _beerRepository.Add(beer);

			return addedBeer;
        }

        // PUT: api/Beers/5
		[Authorize]
        public void Put(int id, [FromBody]Beer beer)
        {
			//Validate id = beer.id;

			var updatedBeer = _beerRepository.Update(beer);
        }

        // DELETE: api/Beers/5
		[Authorize]
        public void Delete(int id)
        {
			_beerRepository.Delete(id);
        }
    }
}
