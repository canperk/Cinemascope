using Microsoft.AspNetCore.Mvc;

namespace BilgeAdam.CinemaScope.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
