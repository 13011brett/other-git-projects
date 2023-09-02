using ContosoPizza.Models;
using ContosoPizza.Services;
using Microsoft.AspNetCore.Mvc;

namespace ContosoPizza.Controllers;

[ApiController]
[Route("[controller]")]
public class PizzaController : ControllerBase
{
    public PizzaController()
    {
    }

    [HttpGet]
    public ActionResult<List<Pizza>> GetAll() =>
        PizzaService.GetAll();

    [HttpGet("{id}")]
    public ActionResult<Pizza> Get(int id)
    {
        var pizza = PizzaService.Get(id);
        if(pizza == null){
            return NotFound();
        }

        return pizza;
    }


    [HttpPost]
    public IActionResult Create(Pizza pizza)
    {
        try{

            PizzaService.Add(pizza);
            return CreatedAtAction(nameof(Get), new{id = pizza.Id}, pizza);
        }
        catch(Exception ex){
            return BadRequest();
        }

    }

    [HttpPut("{id}")]
    public IActionResult Update(int id, Pizza pizza)
    {
        if(id != pizza.Id)
            return BadRequest();
        
        var existingPizza = PizzaService.Get(id);
        if(existingPizza is null){
            return NotFound();
        }
        try{
            PizzaService.Update(pizza);
            return NoContent();
        }
        catch(Exception ex){
            return BadRequest();
        }
        
        // This code will update the pizza and return a result
    }

    [HttpDelete("{id}")]
    public IActionResult Delete(int id)
    {

        var pizza = PizzaService.Get(id);
        if(pizza is null){
            return NotFound();
        }
        try{

            PizzaService.Delete(id);
            return NoContent();
        }
        catch(Exception ex){
            return NotFound();
        }
        // This code will delete the pizza and return a result
    }
}