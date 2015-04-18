using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace NamaBeer.WebAPI.Models
{
	public class Beer
	{
		public int Id { get; set; }
		public string Name { get; set; }
		public string Brewery { get; set; }
		public string Style { get; set; }
		public DateTime DateOfTasting { get; set; }
		public int JasonRating { get; set; }
		public int ValRating { get; set; }
	}
}