using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Hosting;

namespace NamaBeer.WebAPI.Models
{
	public class StyleRepository : IStyleRepository
	{
		private static readonly string _filePath = @"~/App_Data/styles.json";

		public IEnumerable<string> Get()
		{
			var filePath = HostingEnvironment.MapPath(_filePath);

			var json = System.IO.File.ReadAllText(filePath);

			var styles = JsonConvert.DeserializeObject<List<string>>(json);

			return styles;
		}
	}
}