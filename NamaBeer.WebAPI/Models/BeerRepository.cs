using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Hosting;

namespace NamaBeer.WebAPI.Models
{
	/// <summary>
	/// Stores the data in a json file so that no database is required
	/// </summary>
	public class BeerRepository
	{
		internal Beer Create()
		{
			var product = new Beer
			{
				DateOfTasting = DateTime.Now
			};

			return product;
		}

		internal List<Beer> Retrieve()
		{
			var filePath = HostingEnvironment.MapPath(@"~/App_Data/beer.json");

			var json = System.IO.File.ReadAllText(filePath);

			var products = JsonConvert.DeserializeObject<List<Beer>>(json);

			return products;
		}

		internal Beer Save(Beer beer)
		{
			// Read in the existing products
			var beers = this.Retrieve();

			// Assign a new Id
			var maxId = beers.Max(b => b.Id);
			beer.Id = maxId + 1;
			beers.Add(beer);

			WriteData(beers);

			return beer;
		}

		internal Beer Save(int id, Beer beer)
		{
			// Read in the existing products
			var beers = this.Retrieve();

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


		private bool WriteData(List<Beer> beers)
		{
			// Write out the Json
			var filePath = HostingEnvironment.MapPath(@"~/App_Data/beer.json");

			var json = JsonConvert.SerializeObject(beers, Formatting.Indented);
			System.IO.File.WriteAllText(filePath, json);

			return true;
		}
	}
}