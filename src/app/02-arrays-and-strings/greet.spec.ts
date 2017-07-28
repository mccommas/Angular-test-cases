
import {greet} from './greet'
describe('greet', () => {
  it('it should include the name of the message', () => {
    expect(greet('jeffrey')).toContain('jeffrey');
    });


});
