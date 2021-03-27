// yup-extended.ts
import * as yup from "yup";
import { AnyObject, Maybe } from "yup/lib/types";

yup.addMethod<yup.StringSchema>(yup.string, "emptyAsUndefined", function () {
    return this.transform((value) => (value ? value : undefined));
});

yup.addMethod<yup.NumberSchema>(yup.number, "emptyAsUndefined", function () {
    return this.transform((value, originalValue) =>
        String(originalValue)?.trim() ? value : undefined
    );
});

yup.addMethod<yup.StringSchema>(yup.string, "mustBe3", function () {
    return this.transform((value) => value === '3');
});



declare module "yup" {
    interface StringSchema<
        TType extends Maybe<string> = string | undefined,
        TContext extends AnyObject = AnyObject,
        TOut extends TType = TType
        > extends yup.BaseSchema<TType, TContext, TOut> {
        emptyAsUndefined(): StringSchema<TType, TContext>;
    }

    interface StringSchema<
        TType extends Maybe<string> = string | undefined,
        TContext extends AnyObject = AnyObject,
        TOut extends TType = TType
        > extends yup.BaseSchema<TType, TContext, TOut> {
        mustBe3(): StringSchema<TType, TContext>;
    }

    interface NumberSchema<
        TType extends Maybe<number> = number | undefined,
        TContext extends AnyObject = AnyObject,
        TOut extends TType = TType
        > extends yup.BaseSchema<TType, TContext, TOut> {
        emptyAsUndefined(): NumberSchema<TType, TContext>;
    }
}

export default yup;