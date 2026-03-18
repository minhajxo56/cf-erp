import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../wayfinder'
/**
* @see \App\Http\Controllers\DesignController::index
* @see app/Http/Controllers/DesignController.php:13
* @route '/designs'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/designs',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\DesignController::index
* @see app/Http/Controllers/DesignController.php:13
* @route '/designs'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\DesignController::index
* @see app/Http/Controllers/DesignController.php:13
* @route '/designs'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\DesignController::index
* @see app/Http/Controllers/DesignController.php:13
* @route '/designs'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\DesignController::index
* @see app/Http/Controllers/DesignController.php:13
* @route '/designs'
*/
const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\DesignController::index
* @see app/Http/Controllers/DesignController.php:13
* @route '/designs'
*/
indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\DesignController::index
* @see app/Http/Controllers/DesignController.php:13
* @route '/designs'
*/
indexForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

index.form = indexForm

/**
* @see \App\Http\Controllers\DesignController::showModule
* @see app/Http/Controllers/DesignController.php:22
* @route '/designs/modules/{module}'
*/
export const showModule = (args: { module: string | number } | [module: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: showModule.url(args, options),
    method: 'get',
})

showModule.definition = {
    methods: ["get","head"],
    url: '/designs/modules/{module}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\DesignController::showModule
* @see app/Http/Controllers/DesignController.php:22
* @route '/designs/modules/{module}'
*/
showModule.url = (args: { module: string | number } | [module: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { module: args }
    }

    if (Array.isArray(args)) {
        args = {
            module: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        module: args.module,
    }

    return showModule.definition.url
            .replace('{module}', parsedArgs.module.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\DesignController::showModule
* @see app/Http/Controllers/DesignController.php:22
* @route '/designs/modules/{module}'
*/
showModule.get = (args: { module: string | number } | [module: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: showModule.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\DesignController::showModule
* @see app/Http/Controllers/DesignController.php:22
* @route '/designs/modules/{module}'
*/
showModule.head = (args: { module: string | number } | [module: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: showModule.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\DesignController::showModule
* @see app/Http/Controllers/DesignController.php:22
* @route '/designs/modules/{module}'
*/
const showModuleForm = (args: { module: string | number } | [module: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: showModule.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\DesignController::showModule
* @see app/Http/Controllers/DesignController.php:22
* @route '/designs/modules/{module}'
*/
showModuleForm.get = (args: { module: string | number } | [module: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: showModule.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\DesignController::showModule
* @see app/Http/Controllers/DesignController.php:22
* @route '/designs/modules/{module}'
*/
showModuleForm.head = (args: { module: string | number } | [module: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: showModule.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

showModule.form = showModuleForm

const DesignController = { index, showModule }

export default DesignController