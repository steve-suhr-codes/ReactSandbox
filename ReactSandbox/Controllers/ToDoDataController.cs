using Microsoft.AspNetCore.Mvc;

namespace ReactSandbox.Controllers;

[ApiController]
[Route("[controller]")]
public class ToDoDataController : ControllerBase
{
    private readonly ILogger<ToDoDataController> _logger;

    public ToDoDataController(ILogger<ToDoDataController> logger)
    {
        _logger = logger;
    }

    [HttpGet]
    public IEnumerable<ToDoItem> Get()
    {
        var todoItems = new List<ToDoItem>
        {
            new ToDoItem
            {
                Id = 1,
                IsDone = true,
                Name = "Asdf"
            },
            new ToDoItem
            {
                Id = 2,
                IsDone = false,
                Name = "Zxc"
            }
        };

        return todoItems
        .ToArray();
    }
}

