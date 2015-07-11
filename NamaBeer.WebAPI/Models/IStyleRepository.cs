using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace NamaBeer.WebAPI.Models
{
	public interface IStyleRepository
	{
		IEnumerable<string> Get();
	}
}
