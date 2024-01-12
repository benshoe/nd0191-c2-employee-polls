import renderer from 'react-test-renderer';
import AnsweredPoll from './AnsweredPoll';
import React from 'react';

describe('tests', () => {
    it('renders correctly', () => {
        const tree = renderer
            .create(<AnsweredPoll answeredOne={true} question={
                {
                    optionOne: {
                        votes: ['sarahedo'],
                        text: 'Build our new application with Javascript',
                    },
                    optionTwo: {
                        votes: [],
                        text: 'Build our new application with Typescript'
                    }
                }
            } users={
                {
                    mtsamis: {
                        id: 'mtsamis'
                    }
                }} />)
            .toJSON();
        expect(tree).toMatchSnapshot({});
    });
});
