---
title: Reversing Delphi Programs - Part 1
subTitle: Getting started with Reverse Engineering of Delphi programs
category: Reverse Engineering
cover: reversing-delphi-programs-p1-cover.jpg
status: "Done"
revision: 1
confidence: "High Likely"
importance: 6
---

This is the first article of the "**Reversing Delphi Programs**" series.

In this article we will explore the *conventions* normally used by Delphi compiler to generate machine code from Delphi source code.
These are the rules you may expect to see when reversing Delphi programs.

The default calling convention is `register`.
It's the most efficient calling convention, since it usually *avoids creation of a stack frame*.

For the `register` convention the cleanup is performed by the callee.

Remember that system functions do not necessarily play by the same rules as ordinary functions, especially those functions that are intended to be called implicitly by compiler-generated code instead of being invoked explicitly by user code. The compiler may have extended information on these system functions, like clobbered registers, unusual parameter locations, `nothrow`, `noreturn` and so on.
This extended information could be in System unit meta data or hardcoded directly into the compiler.

## Parameters conventions

Up to three parameters are passed in CPU registers, and the rest (if any) are passed on the stack.

The parameters are passed in order of declaration (left to right).

The first three parameters that qualify are passed in the `EAX`, `EDX`, and `ECX` registers, in that order.
The remaining parameters are pushed onto the stack in order of declaration.

Real, method-pointer, variant, Int64, and structured types do not qualify as register parameters, but all other parameters do.

### Example

For example, given the declaration:

```
procedure Test(A: Integer;
               var B: Char;
               C: Double;
               const D: string;
               E: Pointer);
```

A call to `Test` passes:
* `A` in `EAX` as a 32-bit integer
* `B` in `EDX` as a pointer to a `Char`
* `D` in `ECX` as a pointer to a long-string memory block
* `C` and `E` are pushed onto the stack as two double-words and a 32-bit pointer, in that order

## Registers saving conventions

Procedures and functions *must preserve* the `EBX`, `ESI`, `EDI`, and `EBP` registers, but *can modify* the `EAX`, `EDX`, and `ECX` registers.

Constructor or destructors preserve the `DL` register.

When working with the MMX and XMM instructions, functions must preserve the values of the `xmm` and `mm` registers.
Delphi functions do not make any assumptions about the state and content of `xmm` registers.
They do not guarantee that the content of `xmm` registers is unchanged.

## Function results conventions

The following conventions are used for returning function result values.

* [Ordinal][ordinal] results are returned, when possible, in a CPU register:
  - Bytes are returned in `AL`
  - Words are returned in `AX`
  - Double-words are returned in `EAX`
* Real results are returned in the floating-point coprocessor's top-of-stack register `ST(0)`
  - For function results of type [Currency][currency], the value in `ST(0)` is scaled by `10000`
  - For example, the Currency value `1.234` is returned in `ST(0)` as `12340`
* For a string, dynamic array, method pointer, or variant result, the effects are the same as if the function result were declared as an additional var parameter following the declared parameters. In other words, *the caller passes an additional 32-bit pointer that points to a variable in which to return the function result*
* [Int64][int64] is returned in `EDX:EAX`
* [Pointer][pointer], class, class-reference, and procedure-pointer results are returned in `EAX`
* For static-array, record, and set results:
  - If the value occupies one byte it is returned in `AL`
  - If the value occupies two bytes it is returned in `AX`
  - If the value occupies four bytes it is returned in `EAX`
  - Otherwise, the result is returned in an additional var parameter that is passed to the function after the declared parameters

## Methods conventions

Methods are like functions but associated with the underlying object (Delphi is Object-Oriented).

Methods use the *same calling conventions* as ordinary procedures and functions, except that every method has an *additional implicit parameter* `Self`, which is a reference to the instance or class in which the method is called.

Under the `register` convention, `Self` behaves as if it were declared before all other parameters. It is therefore always passed in the `EAX` register.

The `Self` parameter is passed as a 32-bit pointer.

## Constructors and Destructors conventions

Constructors and destructors use the same calling conventions as other methods, except that an additional Boolean `flag` parameter is passed to *indicate the context of the constructor or destructor call*.

The flag parameter behaves as if it were declared before all other parameters. It is passed in the `DL` register.

* In constructors:
  - `True`: indicates that the constructor was *invoked through a class reference*. In this case, the constructor creates an instance of the class given by `Self`, and returns a reference to the newly created object in `EAX`
  - `False`: indicates that the constructor was *invoked through an instance object or using the inherited keyword*. In this case, the constructor behaves like an ordinary method
* In destructors:
  - `True`: indicates that the destructor was *invoked through an instance object*. In this case, the destructor deallocates the instance given by `Self` just before returning
  - `False`: indicates that the destructor was *invoked using the inherited keyword*. In this case, the destructor behaves like an ordinary method

## Sources

* [Hack the Box](https://www.hackthebox.eu)
* [Data Types][data types]
* [Procedures and Functions][procedures and functions]
* [Program Control][program control]

<!-- Pointers -->

[data types]: http://docwiki.embarcadero.com/RADStudio/Tokyo/en/Delphi_Data_Types_for_API_Integration
[procedures and functions]: http://docwiki.embarcadero.com/RADStudio/Tokyo/en/Procedures_and_Functions_(Delphi)
[program control]: http://docwiki.embarcadero.com/RADStudio/Tokyo/en/Program_Control_(Delphi)

[pointer]: http://docwiki.embarcadero.com/Libraries/Tokyo/en/System.Pointer
[currency]: http://docwiki.embarcadero.com/Libraries/Tokyo/en/System.Currency
[ordinal]: http://docwiki.embarcadero.com/RADStudio/Tokyo/en/Simple_Types_(Delphi)#Ordinal_Types
[int64]: http://docwiki.embarcadero.com/Libraries/Tokyo/en/System.Int64
