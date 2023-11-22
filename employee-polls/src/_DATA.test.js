import {_saveQuestion} from "./_DATA";

describe('DATA', () => {

    it('saveQuestion returns correct data', async () => {
        const result = await _saveQuestion({author: 'mtsamis', optionOneText: 'Be happy', optionTwoText: 'Be rich'});
        expect(result.author).toEqual('mtsamis');
        expect(result.optionOne.text).toEqual('Be happy');
        expect(result.optionOne.votes).toEqual([]);
        expect(result.optionTwo.text).toEqual('Be rich');
        expect(result.optionTwo.votes).toEqual([]);
        expect(result.id).toBeDefined();
        expect(result.timestamp).toBeDefined();
    });

    it('saveQuestion returns error', async () => {
        await expect(_saveQuestion({})).rejects.toEqual('Please provide optionOneText, optionTwoText, and author');
        await expect(_saveQuestion({author: 'mtsamis'})).rejects.toEqual('Please provide optionOneText, optionTwoText, and author');
        await expect(_saveQuestion({optionOneText: 'Be happy'})).rejects.toEqual('Please provide optionOneText, optionTwoText, and author');
        await expect(_saveQuestion({optionTwoText: 'Be rich'})).rejects.toEqual('Please provide optionOneText, optionTwoText, and author');
        await expect(_saveQuestion({author: 'mtsamis', optionOneText: 'Be happy'})).rejects.toEqual('Please provide optionOneText, optionTwoText, and author');
        await expect(_saveQuestion({author: 'mtsamis', optionOneTwo: 'Be rich'})).rejects.toEqual('Please provide optionOneText, optionTwoText, and author');
        await expect(_saveQuestion({optionOneText: 'Be happy', optionOneTwo: 'Be rich'})).rejects.toEqual('Please provide optionOneText, optionTwoText, and author');
    });
})
