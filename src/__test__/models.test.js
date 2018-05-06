import campaign from '../models/campaign';
import level from '../models/level';
import load_state from '../models/load_state';
import negative from '../models/negative';
import option from '../models/option';
import question_campaign from '../models/question_campaign';
import question_group from '../models/question_group';
import question from '../models/question';
import team from '../models/team';
import type from '../models/type';
import user from '../models/user';
import weightage from '../models/weightage';


describe('Check for the correct tableName for all Model', ()=> {
  test('Check for the campaign tableName', ()=> {
    expect(campaign.extend().__super__.tableName).toBe('campaign1')
  }),
  test('Check for the level tableName', ()=> {
    expect(level.extend().__super__.tableName).toBe('level')
  }),
  test('Check for the load_state tableName', ()=> {
    expect(load_state.extend().__super__.tableName).toBe('load_state')
  }),
  test('Check for the negative marks tableName', ()=> {
    expect(negative.extend().__super__.tableName).toBe('negative')
  }),
  test('Check for the options  tableName', ()=> {
    expect(option.extend().__super__.tableName).toBe('option')
  }),
  test('Check for the question_campaign tableName', ()=> {
    expect(question_campaign.extend().__super__.tableName).toBe('question_campaign1')
  }),
  test('Check for the question_group tableName', ()=> {
    expect(question_group.extend().__super__.tableName).toBe('question_group')
  }),
  test('Check for the question tableName', ()=> {
    expect(question.extend().__super__.tableName).toBe('question1')
  }),
  test('Check for the team tableName', ()=> {
    expect(team.extend().__super__.tableName).toBe('team')
  }),
  test('Check for the user tableName', ()=> {
    expect(user.extend().__super__.tableName).toBe('user_master1')
  }),
  test('Check for the type of question tableName', ()=> {
    expect(type.extend().__super__.tableName).toBe('type')
  }),
  test('Check for the weightage of marks tableName', ()=> {
    expect(weightage.extend().__super__.tableName).toBe('weightage')
  })
});
