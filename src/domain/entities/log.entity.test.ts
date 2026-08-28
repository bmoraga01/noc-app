import { LogEntity, LogSeverityLevel } from "./log.entity";


describe('log.entity.ts', () => {

    const dataObj =  {
        message: 'Hola Mundo',
        level: LogSeverityLevel.medium,
        origin: 'log.entity.test.ts',
        createdAt: new Date()
    };

    test('should create a LogEntity instance', () => {

    
        const log = new LogEntity(dataObj);

        expect( log ).toBeInstanceOf( LogEntity );
        expect( log.message ).toBe( dataObj.message );
        expect( log.level ).toBe( dataObj.level );
        expect( log.origin ).toBe( dataObj.origin );
        expect( log.createdAt ).toBeInstanceOf( Date );

    });

    test('should create a LogEnrtity instance from json', () => {

        const json = `{"level":"low","message":"Service https://pokeapi.co/api/v2/pokemon/1 working","createdAt":"2026-08-27T22:57:15.224Z","origin":"check-service.ts"}`;

        const log = LogEntity.fromJson(json);

        expect( log ).toBeInstanceOf( LogEntity );
        expect( log.message ).toBe( "Service https://pokeapi.co/api/v2/pokemon/1 working" );
        expect( log.level ).toBe( LogSeverityLevel.low );
        expect( log.origin ).toBe( "check-service.ts" );
        expect( log.createdAt ).toBeInstanceOf( Date );

    });

    test('should create a LogEntity instance from object', () => {

        const log = LogEntity.fromObject(dataObj);

        expect( log ).toBeInstanceOf( LogEntity );
        expect( log.message ).toBe( dataObj.message );
        expect( log.level ).toBe( dataObj.level );
        expect( log.origin ).toBe( dataObj.origin );
        expect( log.createdAt ).toBeInstanceOf( Date );

    });

});