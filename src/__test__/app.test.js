import Team from '../team';
import errorRepo from '../errorrepository';

describe('check in class team methods', () => {
    const team = new Team();
    test('method add', () => {
        const receiver = team.add('Joe');
        const result = new Set ({'Joe'});
        expect(receiver).toEqual(result);
    });

});