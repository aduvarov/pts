declare function test(a: any): void;
declare function test2(a: number): number | undefined;
declare function test3(a: number): number;
type StrOrNumFunc = (a: number | string) => number;
declare class A {
    b: number;
    test(): () => void;
}
