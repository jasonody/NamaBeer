using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Hosting;

namespace NamaBeer.WebAPI.Models
{
	/// <summary>
	/// Stores the data in a json file so the data layer can be implemented later
	/// </summary>
	public class BeerRepository : IBeerRepository
	{
		private static readonly string _filePath = @"~/App_Data/beers.json";

		public IEnumerable<Beer> Get()
		{
			var filePath = HostingEnvironment.MapPath(_filePath);

			var json = System.IO.File.ReadAllText(filePath);

			var beers = JsonConvert.DeserializeObject<List<Beer>>(json);

			return beers;
		}

		public Beer Get(int id)
		{
			var beers = Get();
			var beer = beers.FirstOrDefault(b => b.Id == id);

			return beer;
		}

		public Beer Add(Beer beer)
		{
			// Read in the existing products
			var beers = this.Get() as List<Beer>;

			// Assign a new Id
			var maxId = beers.Max(b => b.Id);
			beer.Id = maxId + 1;
			beers.Add(beer);

			WriteData(beers);

			return beer;
		}

		public Beer Update(Beer beer)
		{
			// Read in the existing products
			var beers = this.Get() as List<Beer>;

			// Locate and replace the item
			var itemIndex = beers.FindIndex(b => b.Id == beer.Id);
			if (itemIndex > 0)
			{
				beers[itemIndex] = beer;
			}
			else
			{
				return null;
			}

			WriteData(beers);

			return beer;
		}

		public void Delete(int id)
		{
			var beers = this.Get() as List<Beer>;

			var beer = beers.Find(b => b.Id == id);

			if (beer != null)
			{
				beers.Remove(beer);
			}

			WriteData(beers);
		}

		private bool WriteData(IEnumerable<Beer> beers)
		{
			// Write out the Json
			var filePath = HostingEnvironment.MapPath(_filePath);

			var json = JsonConvert.SerializeObject(beers, Formatting.Indented);
			System.IO.File.WriteAllText(filePath, json);

			return true;
		}
	}
}