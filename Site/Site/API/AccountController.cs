using QuantumFactory.tuServicio.Site.Models;
using System.Web.Http;
using System.Web.Http.Results;
using System.Web.Mvc;

namespace QuantumFactory.tuServicio.Site.Controllers
{
    [Authorize]
    public class AccountController : ApiController
    {
        //
        // GET: /Account/Login
        //[System.Web.Http.AllowAnonymous]
        //public ActionResult Login(string returnUrl)
        //{
        //    ViewBag.ReturnUrl = returnUrl;
        //    return View();
        //}

        [HttpPut]
        [AllowAnonymous]
        public IHttpActionResult Authenticate([FromBody]UserDataModel model)
        {
            return Ok();
        }
    }
}