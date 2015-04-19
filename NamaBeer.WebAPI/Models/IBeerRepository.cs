using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace NamaBeer.WebAPI.Models
{
	public interface IBeerRepository
	{
		IEnumerable<Beer> Get();
		Beer Get(int id);
		Beer Add(Beer beer);
		Beer Update(Beer beer);
	}
}
