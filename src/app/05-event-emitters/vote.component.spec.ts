import {VoteComponent} from './vote.component';

describe('VoteComponent', () => {
  var component: VoteComponent;

  beforeEach(() => {
    component = new VoteComponent();
  });

  it('it should raise vote Changed event when upvoted', () => {
    let totalVotes = null;
    component.voteChanged.subscribe(tv => totalVotes = tv);
    component.upVote
    expect(totalVotes).toBe(1)

  });
});
