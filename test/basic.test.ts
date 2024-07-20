import { expect, test } from 'vitest'
import accessorFn from '../src'

test('test cases from README.md 1', () => {
	const obj = {
		a: 1,
		b: 2
	};
	const aFn = accessorFn('a');

	expect(aFn(obj)).toBe(1)
})

test('test cases from README.md 2', () => {
	const obj = {
		a: 1,
		b: 2
	};
	const sumFn = accessorFn(d => d.a + d.b);

	expect(sumFn(obj)).toBe(3)
})

test('test cases from README.md 3', () => {
	const obj = {
		a: 1,
		b: 2
	};
	const constantFn = accessorFn(7);

	expect(constantFn(obj)).toBe(7)
})
