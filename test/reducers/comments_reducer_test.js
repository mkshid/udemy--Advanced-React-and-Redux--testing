import { expect } from '../test_helper';
import commentReducer from '../../src/reducers/comments_reducer';
import { SAVE_COMMENT } from '../../src/actions/types';


describe('Comment Reducer', () => {

    it('handles action with unkown type', () => {
        expect(commentReducer(undefined, {})).to.eql([]);
    });

    it('action of type SAVE_COMMENT', () => {
        const action = {type: SAVE_COMMENT, payload: 'new comment'};
        expect(commentReducer([], action)).to.eql(['new comment']);
    });

       
});
