using System.Web.Http;
using System.Web.Http.Results;
using System.Web.Mvc;

namespace Site.Controllers
{
    [System.Web.Http.Authorize]
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

        [System.Web.Http.HttpGet]
        [System.Web.Http.AllowAnonymous]
        public IHttpActionResult Authenticate()
        {
            return new OkResult(new System.Net.Http.HttpRequestMessage());
        }
    }
}