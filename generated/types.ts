export default {
    "scalars": [
        1,
        2,
        4,
        5,
        6,
        11,
        13,
        22,
        30,
        35
    ],
    "types": {
        "Int_comparison_exp": {
            "_eq": [
                1
            ],
            "_gt": [
                1
            ],
            "_gte": [
                1
            ],
            "_in": [
                1
            ],
            "_is_null": [
                2
            ],
            "_lt": [
                1
            ],
            "_lte": [
                1
            ],
            "_neq": [
                1
            ],
            "_nin": [
                1
            ],
            "__typename": [
                4
            ]
        },
        "Int": {},
        "Boolean": {},
        "String_comparison_exp": {
            "_eq": [
                4
            ],
            "_gt": [
                4
            ],
            "_gte": [
                4
            ],
            "_ilike": [
                4
            ],
            "_in": [
                4
            ],
            "_iregex": [
                4
            ],
            "_is_null": [
                2
            ],
            "_like": [
                4
            ],
            "_lt": [
                4
            ],
            "_lte": [
                4
            ],
            "_neq": [
                4
            ],
            "_nilike": [
                4
            ],
            "_nin": [
                4
            ],
            "_niregex": [
                4
            ],
            "_nlike": [
                4
            ],
            "_nregex": [
                4
            ],
            "_nsimilar": [
                4
            ],
            "_regex": [
                4
            ],
            "_similar": [
                4
            ],
            "__typename": [
                4
            ]
        },
        "String": {},
        "cursor_ordering": {},
        "order_by": {},
        "sneakers_items": {
            "id": [
                35
            ],
            "image_url": [
                4
            ],
            "price": [
                1
            ],
            "title": [
                4
            ],
            "__typename": [
                4
            ]
        },
        "sneakers_items_aggregate": {
            "aggregate": [
                9
            ],
            "nodes": [
                7
            ],
            "__typename": [
                4
            ]
        },
        "sneakers_items_aggregate_fields": {
            "avg": [
                10
            ],
            "count": [
                1,
                {
                    "columns": [
                        22,
                        "[sneakers_items_select_column!]"
                    ],
                    "distinct": [
                        2
                    ]
                }
            ],
            "max": [
                16
            ],
            "min": [
                17
            ],
            "stddev": [
                24
            ],
            "stddev_pop": [
                25
            ],
            "stddev_samp": [
                26
            ],
            "sum": [
                29
            ],
            "var_pop": [
                32
            ],
            "var_samp": [
                33
            ],
            "variance": [
                34
            ],
            "__typename": [
                4
            ]
        },
        "sneakers_items_avg_fields": {
            "price": [
                11
            ],
            "__typename": [
                4
            ]
        },
        "Float": {},
        "sneakers_items_bool_exp": {
            "_and": [
                12
            ],
            "_not": [
                12
            ],
            "_or": [
                12
            ],
            "id": [
                36
            ],
            "image_url": [
                3
            ],
            "price": [
                0
            ],
            "title": [
                3
            ],
            "__typename": [
                4
            ]
        },
        "sneakers_items_constraint": {},
        "sneakers_items_inc_input": {
            "price": [
                1
            ],
            "__typename": [
                4
            ]
        },
        "sneakers_items_insert_input": {
            "id": [
                35
            ],
            "image_url": [
                4
            ],
            "price": [
                1
            ],
            "title": [
                4
            ],
            "__typename": [
                4
            ]
        },
        "sneakers_items_max_fields": {
            "id": [
                35
            ],
            "image_url": [
                4
            ],
            "price": [
                1
            ],
            "title": [
                4
            ],
            "__typename": [
                4
            ]
        },
        "sneakers_items_min_fields": {
            "id": [
                35
            ],
            "image_url": [
                4
            ],
            "price": [
                1
            ],
            "title": [
                4
            ],
            "__typename": [
                4
            ]
        },
        "sneakers_items_mutation_response": {
            "affected_rows": [
                1
            ],
            "returning": [
                7
            ],
            "__typename": [
                4
            ]
        },
        "sneakers_items_on_conflict": {
            "constraint": [
                13
            ],
            "update_columns": [
                30
            ],
            "where": [
                12
            ],
            "__typename": [
                4
            ]
        },
        "sneakers_items_order_by": {
            "id": [
                6
            ],
            "image_url": [
                6
            ],
            "price": [
                6
            ],
            "title": [
                6
            ],
            "__typename": [
                4
            ]
        },
        "sneakers_items_pk_columns_input": {
            "id": [
                35
            ],
            "__typename": [
                4
            ]
        },
        "sneakers_items_select_column": {},
        "sneakers_items_set_input": {
            "id": [
                35
            ],
            "image_url": [
                4
            ],
            "price": [
                1
            ],
            "title": [
                4
            ],
            "__typename": [
                4
            ]
        },
        "sneakers_items_stddev_fields": {
            "price": [
                11
            ],
            "__typename": [
                4
            ]
        },
        "sneakers_items_stddev_pop_fields": {
            "price": [
                11
            ],
            "__typename": [
                4
            ]
        },
        "sneakers_items_stddev_samp_fields": {
            "price": [
                11
            ],
            "__typename": [
                4
            ]
        },
        "sneakers_items_stream_cursor_input": {
            "initial_value": [
                28
            ],
            "ordering": [
                5
            ],
            "__typename": [
                4
            ]
        },
        "sneakers_items_stream_cursor_value_input": {
            "id": [
                35
            ],
            "image_url": [
                4
            ],
            "price": [
                1
            ],
            "title": [
                4
            ],
            "__typename": [
                4
            ]
        },
        "sneakers_items_sum_fields": {
            "price": [
                1
            ],
            "__typename": [
                4
            ]
        },
        "sneakers_items_update_column": {},
        "sneakers_items_updates": {
            "_inc": [
                14
            ],
            "_set": [
                23
            ],
            "where": [
                12
            ],
            "__typename": [
                4
            ]
        },
        "sneakers_items_var_pop_fields": {
            "price": [
                11
            ],
            "__typename": [
                4
            ]
        },
        "sneakers_items_var_samp_fields": {
            "price": [
                11
            ],
            "__typename": [
                4
            ]
        },
        "sneakers_items_variance_fields": {
            "price": [
                11
            ],
            "__typename": [
                4
            ]
        },
        "uuid": {},
        "uuid_comparison_exp": {
            "_eq": [
                35
            ],
            "_gt": [
                35
            ],
            "_gte": [
                35
            ],
            "_in": [
                35
            ],
            "_is_null": [
                2
            ],
            "_lt": [
                35
            ],
            "_lte": [
                35
            ],
            "_neq": [
                35
            ],
            "_nin": [
                35
            ],
            "__typename": [
                4
            ]
        },
        "Query": {
            "sneakers_items": [
                7,
                {
                    "distinct_on": [
                        22,
                        "[sneakers_items_select_column!]"
                    ],
                    "limit": [
                        1
                    ],
                    "offset": [
                        1
                    ],
                    "order_by": [
                        20,
                        "[sneakers_items_order_by!]"
                    ],
                    "where": [
                        12
                    ]
                }
            ],
            "sneakers_items_aggregate": [
                8,
                {
                    "distinct_on": [
                        22,
                        "[sneakers_items_select_column!]"
                    ],
                    "limit": [
                        1
                    ],
                    "offset": [
                        1
                    ],
                    "order_by": [
                        20,
                        "[sneakers_items_order_by!]"
                    ],
                    "where": [
                        12
                    ]
                }
            ],
            "sneakers_items_by_pk": [
                7,
                {
                    "id": [
                        35,
                        "uuid!"
                    ]
                }
            ],
            "__typename": [
                4
            ]
        },
        "Mutation": {
            "delete_sneakers_items": [
                18,
                {
                    "where": [
                        12,
                        "sneakers_items_bool_exp!"
                    ]
                }
            ],
            "delete_sneakers_items_by_pk": [
                7,
                {
                    "id": [
                        35,
                        "uuid!"
                    ]
                }
            ],
            "insert_sneakers_items": [
                18,
                {
                    "objects": [
                        15,
                        "[sneakers_items_insert_input!]!"
                    ],
                    "on_conflict": [
                        19
                    ]
                }
            ],
            "insert_sneakers_items_one": [
                7,
                {
                    "object": [
                        15,
                        "sneakers_items_insert_input!"
                    ],
                    "on_conflict": [
                        19
                    ]
                }
            ],
            "update_sneakers_items": [
                18,
                {
                    "_inc": [
                        14
                    ],
                    "_set": [
                        23
                    ],
                    "where": [
                        12,
                        "sneakers_items_bool_exp!"
                    ]
                }
            ],
            "update_sneakers_items_by_pk": [
                7,
                {
                    "_inc": [
                        14
                    ],
                    "_set": [
                        23
                    ],
                    "pk_columns": [
                        21,
                        "sneakers_items_pk_columns_input!"
                    ]
                }
            ],
            "update_sneakers_items_many": [
                18,
                {
                    "updates": [
                        31,
                        "[sneakers_items_updates!]!"
                    ]
                }
            ],
            "__typename": [
                4
            ]
        },
        "Subscription": {
            "sneakers_items": [
                7,
                {
                    "distinct_on": [
                        22,
                        "[sneakers_items_select_column!]"
                    ],
                    "limit": [
                        1
                    ],
                    "offset": [
                        1
                    ],
                    "order_by": [
                        20,
                        "[sneakers_items_order_by!]"
                    ],
                    "where": [
                        12
                    ]
                }
            ],
            "sneakers_items_aggregate": [
                8,
                {
                    "distinct_on": [
                        22,
                        "[sneakers_items_select_column!]"
                    ],
                    "limit": [
                        1
                    ],
                    "offset": [
                        1
                    ],
                    "order_by": [
                        20,
                        "[sneakers_items_order_by!]"
                    ],
                    "where": [
                        12
                    ]
                }
            ],
            "sneakers_items_by_pk": [
                7,
                {
                    "id": [
                        35,
                        "uuid!"
                    ]
                }
            ],
            "sneakers_items_stream": [
                7,
                {
                    "batch_size": [
                        1,
                        "Int!"
                    ],
                    "cursor": [
                        27,
                        "[sneakers_items_stream_cursor_input]!"
                    ],
                    "where": [
                        12
                    ]
                }
            ],
            "__typename": [
                4
            ]
        }
    }
}