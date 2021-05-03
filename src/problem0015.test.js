/**
 * Lattice paths
 *
 * https://projecteuler.net/problem=15
 *
 *
 * Starting in the top left corner of a 2×2 grid, and only being able to move
 * to the right and down, there are exactly 6 routes to the bottom right corner.
 *
 * How many such routes are there through a 20×20 grid?
 *
 * ////////////////////////////////////////////////////////////////////////////
 *
 * Result found: 137846528820
 *
 * ////////////////////////////////////////////////////////////////////////////
 */

import { problem0015 } from './problem0015.js';

const DEBUG =
  process.env.DEBUG === 'true' || process.env.DEBUG === '1' || false;

describe('problem 0015', () => {
  it('problem 0015 solution found', () => {
    expect.assertions(1);

    const solutionFound = 137846528820;
    const side = 20;

    const calculated = problem0015(side, DEBUG);

    console.log(`PROBLEM 0015 solution found: ${calculated}`);

    expect(calculated).toBe(solutionFound);
  });
});