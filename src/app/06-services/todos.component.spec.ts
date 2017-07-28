import { TodosComponent } from './todos.component';
import { TodoService } from './todo.service';
import 'rxjs/add/observable/from;
import {Observable} from "rxjs/Observable";
import {observable} from "rxjs/symbol/observable";

describe('TodosComponent', () => {
  let component: TodosComponent;
  let service: TodoService;

  beforeEach(() => {
    service= new TodoService(null)
    component = new  TodosComponent(service)
  });

  it('should set todos property with items returned from the service', () => {
    let todos =[1,2,3]
    spyOn(service,'getTodos').and .callFake( ()=>{
      return observable.from([[todos]]);
      component.ngOnInit();
      expect(component.todos.length).toBe(todos)

    })
  });
});
