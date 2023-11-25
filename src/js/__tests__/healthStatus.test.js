import helthStatus from '../healtStatus';

test('health indicator critical', () => {
    const hero = { name: 'Маг', health: 14 }; 
    expect(helthStatus(hero)).toBe('critical');
});

test('health indicator wounded', () => {
    const hero = { name: 'Маг', health: 30 }; 
    expect(helthStatus(hero)).toBe('wounded');
});

test('health indicator healthy', () => {
    const hero = { name: 'Маг', health: 55 }; 
    expect(helthStatus(hero)).toBe('healthy');
});