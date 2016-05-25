using QuantumFactory.tuServicio.Site.Models;
using System.Web.Http;

namespace QuantumFactory.tuServicio.Site.Controllers
{
    [Authorize]
    public class AccountController : ApiController
    {
        [HttpPost]
        [AllowAnonymous]
        public IHttpActionResult Authenticate([FromBody]UserDataModel model)
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            Audience newAudience = AudiencesStore.AddAudience("pedro el escamoso");
            return Ok(newAudience);
        }
    }
}