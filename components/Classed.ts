import React from "react";

export function ClassedComponent<F extends (...arg0: any) => JSX.Element, R>(fn: F, baseClassName: string | Record<keyof R, string> & { default?: string }): F {
    return function (...args: any[]) {
        
        let variants: Record<keyof R, string> & { default?: string };
        if (typeof baseClassName === 'string') {
            variants = {
                default: baseClassName,
            } as Record<keyof R, string> & { default?: string };
        } else {
            variants = baseClassName;
        }
        
        const [props, ...restArgs] = args;
        const { className: passedClassName, variant: selectedVariant, ...restProps } = props;
        let className = passedClassName;
        const variant = (selectedVariant || 'default') as keyof R;
        className = `${variants[variant]}${passedClassName ? ` ${passedClassName}` : ""}`
        const modifiedArgs = [
            {
                className,
                ...restProps
            },
            ...restArgs
        ]
        return fn(...modifiedArgs);
    } as F
}

export function ClassedTag<Tag extends keyof JSX.IntrinsicElements, R>(tag: Tag, baseClassName: string | Record<keyof R, string> & { default?: string }): ((props: JSX.IntrinsicElements[Tag] & { variant?: keyof R }) => React.ReactElement)  {
    return (props: JSX.IntrinsicElements[Tag] & { variant?: keyof R }) => {
        let variants: Record<keyof R, string> & { default?: string };
        if (typeof baseClassName === 'string') {
            variants = {
                default: baseClassName,
            } as Record<keyof R, string> & { default?: string };
        } else {
            variants = baseClassName;
        }

        const { className: passedClassName, variant: selectedVariant, ...restProps } = props;
        let className = passedClassName;
        const variant = selectedVariant || 'default';
        className = `${variants[variant]}${passedClassName ?     ` ${passedClassName}` : ""}`;
        return React.createElement(tag, { className, ...restProps });
    }
}