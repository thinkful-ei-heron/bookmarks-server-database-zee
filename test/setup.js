process.env.TZ = 'UTC';
process.env.NODE_ENV = 'test';

require('dotenv').config();
const { expect } = require('chai');
const supertest = require('supertest');

//sets 2 global variables
global.expect = expect;
global.supertest = supertest;