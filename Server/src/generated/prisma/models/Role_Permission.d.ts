import type * as runtime from "@prisma/client/runtime/library";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model Role_Permission
 *
 */
export type Role_PermissionModel = runtime.Types.Result.DefaultSelection<Prisma.$Role_PermissionPayload>;
export type AggregateRole_Permission = {
    _count: Role_PermissionCountAggregateOutputType | null;
    _avg: Role_PermissionAvgAggregateOutputType | null;
    _sum: Role_PermissionSumAggregateOutputType | null;
    _min: Role_PermissionMinAggregateOutputType | null;
    _max: Role_PermissionMaxAggregateOutputType | null;
};
export type Role_PermissionAvgAggregateOutputType = {
    rpid: number | null;
    roleid: number | null;
};
export type Role_PermissionSumAggregateOutputType = {
    rpid: number | null;
    roleid: number | null;
};
export type Role_PermissionMinAggregateOutputType = {
    rpid: number | null;
    roleid: number | null;
};
export type Role_PermissionMaxAggregateOutputType = {
    rpid: number | null;
    roleid: number | null;
};
export type Role_PermissionCountAggregateOutputType = {
    rpid: number;
    roleid: number;
    _all: number;
};
export type Role_PermissionAvgAggregateInputType = {
    rpid?: true;
    roleid?: true;
};
export type Role_PermissionSumAggregateInputType = {
    rpid?: true;
    roleid?: true;
};
export type Role_PermissionMinAggregateInputType = {
    rpid?: true;
    roleid?: true;
};
export type Role_PermissionMaxAggregateInputType = {
    rpid?: true;
    roleid?: true;
};
export type Role_PermissionCountAggregateInputType = {
    rpid?: true;
    roleid?: true;
    _all?: true;
};
export type Role_PermissionAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which Role_Permission to aggregate.
     */
    where?: Prisma.Role_PermissionWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Role_Permissions to fetch.
     */
    orderBy?: Prisma.Role_PermissionOrderByWithRelationInput | Prisma.Role_PermissionOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.Role_PermissionWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Role_Permissions from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Role_Permissions.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Role_Permissions
    **/
    _count?: true | Role_PermissionCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: Role_PermissionAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: Role_PermissionSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: Role_PermissionMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: Role_PermissionMaxAggregateInputType;
};
export type GetRole_PermissionAggregateType<T extends Role_PermissionAggregateArgs> = {
    [P in keyof T & keyof AggregateRole_Permission]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateRole_Permission[P]> : Prisma.GetScalarType<T[P], AggregateRole_Permission[P]>;
};
export type Role_PermissionGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.Role_PermissionWhereInput;
    orderBy?: Prisma.Role_PermissionOrderByWithAggregationInput | Prisma.Role_PermissionOrderByWithAggregationInput[];
    by: Prisma.Role_PermissionScalarFieldEnum[] | Prisma.Role_PermissionScalarFieldEnum;
    having?: Prisma.Role_PermissionScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: Role_PermissionCountAggregateInputType | true;
    _avg?: Role_PermissionAvgAggregateInputType;
    _sum?: Role_PermissionSumAggregateInputType;
    _min?: Role_PermissionMinAggregateInputType;
    _max?: Role_PermissionMaxAggregateInputType;
};
export type Role_PermissionGroupByOutputType = {
    rpid: number;
    roleid: number;
    _count: Role_PermissionCountAggregateOutputType | null;
    _avg: Role_PermissionAvgAggregateOutputType | null;
    _sum: Role_PermissionSumAggregateOutputType | null;
    _min: Role_PermissionMinAggregateOutputType | null;
    _max: Role_PermissionMaxAggregateOutputType | null;
};
type GetRole_PermissionGroupByPayload<T extends Role_PermissionGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<Role_PermissionGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof Role_PermissionGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], Role_PermissionGroupByOutputType[P]> : Prisma.GetScalarType<T[P], Role_PermissionGroupByOutputType[P]>;
}>>;
export type Role_PermissionWhereInput = {
    AND?: Prisma.Role_PermissionWhereInput | Prisma.Role_PermissionWhereInput[];
    OR?: Prisma.Role_PermissionWhereInput[];
    NOT?: Prisma.Role_PermissionWhereInput | Prisma.Role_PermissionWhereInput[];
    rpid?: Prisma.IntFilter<"Role_Permission"> | number;
    roleid?: Prisma.IntFilter<"Role_Permission"> | number;
    role?: Prisma.XOR<Prisma.RoleScalarRelationFilter, Prisma.RoleWhereInput>;
};
export type Role_PermissionOrderByWithRelationInput = {
    rpid?: Prisma.SortOrder;
    roleid?: Prisma.SortOrder;
    role?: Prisma.RoleOrderByWithRelationInput;
};
export type Role_PermissionWhereUniqueInput = Prisma.AtLeast<{
    rpid?: number;
    AND?: Prisma.Role_PermissionWhereInput | Prisma.Role_PermissionWhereInput[];
    OR?: Prisma.Role_PermissionWhereInput[];
    NOT?: Prisma.Role_PermissionWhereInput | Prisma.Role_PermissionWhereInput[];
    roleid?: Prisma.IntFilter<"Role_Permission"> | number;
    role?: Prisma.XOR<Prisma.RoleScalarRelationFilter, Prisma.RoleWhereInput>;
}, "rpid">;
export type Role_PermissionOrderByWithAggregationInput = {
    rpid?: Prisma.SortOrder;
    roleid?: Prisma.SortOrder;
    _count?: Prisma.Role_PermissionCountOrderByAggregateInput;
    _avg?: Prisma.Role_PermissionAvgOrderByAggregateInput;
    _max?: Prisma.Role_PermissionMaxOrderByAggregateInput;
    _min?: Prisma.Role_PermissionMinOrderByAggregateInput;
    _sum?: Prisma.Role_PermissionSumOrderByAggregateInput;
};
export type Role_PermissionScalarWhereWithAggregatesInput = {
    AND?: Prisma.Role_PermissionScalarWhereWithAggregatesInput | Prisma.Role_PermissionScalarWhereWithAggregatesInput[];
    OR?: Prisma.Role_PermissionScalarWhereWithAggregatesInput[];
    NOT?: Prisma.Role_PermissionScalarWhereWithAggregatesInput | Prisma.Role_PermissionScalarWhereWithAggregatesInput[];
    rpid?: Prisma.IntWithAggregatesFilter<"Role_Permission"> | number;
    roleid?: Prisma.IntWithAggregatesFilter<"Role_Permission"> | number;
};
export type Role_PermissionCreateInput = {
    role: Prisma.RoleCreateNestedOneWithoutRole_PermissionInput;
};
export type Role_PermissionUncheckedCreateInput = {
    rpid?: number;
    roleid: number;
};
export type Role_PermissionUpdateInput = {
    role?: Prisma.RoleUpdateOneRequiredWithoutRole_PermissionNestedInput;
};
export type Role_PermissionUncheckedUpdateInput = {
    rpid?: Prisma.IntFieldUpdateOperationsInput | number;
    roleid?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type Role_PermissionCreateManyInput = {
    rpid?: number;
    roleid: number;
};
export type Role_PermissionUpdateManyMutationInput = {};
export type Role_PermissionUncheckedUpdateManyInput = {
    rpid?: Prisma.IntFieldUpdateOperationsInput | number;
    roleid?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type Role_PermissionListRelationFilter = {
    every?: Prisma.Role_PermissionWhereInput;
    some?: Prisma.Role_PermissionWhereInput;
    none?: Prisma.Role_PermissionWhereInput;
};
export type Role_PermissionOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type Role_PermissionCountOrderByAggregateInput = {
    rpid?: Prisma.SortOrder;
    roleid?: Prisma.SortOrder;
};
export type Role_PermissionAvgOrderByAggregateInput = {
    rpid?: Prisma.SortOrder;
    roleid?: Prisma.SortOrder;
};
export type Role_PermissionMaxOrderByAggregateInput = {
    rpid?: Prisma.SortOrder;
    roleid?: Prisma.SortOrder;
};
export type Role_PermissionMinOrderByAggregateInput = {
    rpid?: Prisma.SortOrder;
    roleid?: Prisma.SortOrder;
};
export type Role_PermissionSumOrderByAggregateInput = {
    rpid?: Prisma.SortOrder;
    roleid?: Prisma.SortOrder;
};
export type Role_PermissionCreateNestedManyWithoutRoleInput = {
    create?: Prisma.XOR<Prisma.Role_PermissionCreateWithoutRoleInput, Prisma.Role_PermissionUncheckedCreateWithoutRoleInput> | Prisma.Role_PermissionCreateWithoutRoleInput[] | Prisma.Role_PermissionUncheckedCreateWithoutRoleInput[];
    connectOrCreate?: Prisma.Role_PermissionCreateOrConnectWithoutRoleInput | Prisma.Role_PermissionCreateOrConnectWithoutRoleInput[];
    createMany?: Prisma.Role_PermissionCreateManyRoleInputEnvelope;
    connect?: Prisma.Role_PermissionWhereUniqueInput | Prisma.Role_PermissionWhereUniqueInput[];
};
export type Role_PermissionUncheckedCreateNestedManyWithoutRoleInput = {
    create?: Prisma.XOR<Prisma.Role_PermissionCreateWithoutRoleInput, Prisma.Role_PermissionUncheckedCreateWithoutRoleInput> | Prisma.Role_PermissionCreateWithoutRoleInput[] | Prisma.Role_PermissionUncheckedCreateWithoutRoleInput[];
    connectOrCreate?: Prisma.Role_PermissionCreateOrConnectWithoutRoleInput | Prisma.Role_PermissionCreateOrConnectWithoutRoleInput[];
    createMany?: Prisma.Role_PermissionCreateManyRoleInputEnvelope;
    connect?: Prisma.Role_PermissionWhereUniqueInput | Prisma.Role_PermissionWhereUniqueInput[];
};
export type Role_PermissionUpdateManyWithoutRoleNestedInput = {
    create?: Prisma.XOR<Prisma.Role_PermissionCreateWithoutRoleInput, Prisma.Role_PermissionUncheckedCreateWithoutRoleInput> | Prisma.Role_PermissionCreateWithoutRoleInput[] | Prisma.Role_PermissionUncheckedCreateWithoutRoleInput[];
    connectOrCreate?: Prisma.Role_PermissionCreateOrConnectWithoutRoleInput | Prisma.Role_PermissionCreateOrConnectWithoutRoleInput[];
    upsert?: Prisma.Role_PermissionUpsertWithWhereUniqueWithoutRoleInput | Prisma.Role_PermissionUpsertWithWhereUniqueWithoutRoleInput[];
    createMany?: Prisma.Role_PermissionCreateManyRoleInputEnvelope;
    set?: Prisma.Role_PermissionWhereUniqueInput | Prisma.Role_PermissionWhereUniqueInput[];
    disconnect?: Prisma.Role_PermissionWhereUniqueInput | Prisma.Role_PermissionWhereUniqueInput[];
    delete?: Prisma.Role_PermissionWhereUniqueInput | Prisma.Role_PermissionWhereUniqueInput[];
    connect?: Prisma.Role_PermissionWhereUniqueInput | Prisma.Role_PermissionWhereUniqueInput[];
    update?: Prisma.Role_PermissionUpdateWithWhereUniqueWithoutRoleInput | Prisma.Role_PermissionUpdateWithWhereUniqueWithoutRoleInput[];
    updateMany?: Prisma.Role_PermissionUpdateManyWithWhereWithoutRoleInput | Prisma.Role_PermissionUpdateManyWithWhereWithoutRoleInput[];
    deleteMany?: Prisma.Role_PermissionScalarWhereInput | Prisma.Role_PermissionScalarWhereInput[];
};
export type Role_PermissionUncheckedUpdateManyWithoutRoleNestedInput = {
    create?: Prisma.XOR<Prisma.Role_PermissionCreateWithoutRoleInput, Prisma.Role_PermissionUncheckedCreateWithoutRoleInput> | Prisma.Role_PermissionCreateWithoutRoleInput[] | Prisma.Role_PermissionUncheckedCreateWithoutRoleInput[];
    connectOrCreate?: Prisma.Role_PermissionCreateOrConnectWithoutRoleInput | Prisma.Role_PermissionCreateOrConnectWithoutRoleInput[];
    upsert?: Prisma.Role_PermissionUpsertWithWhereUniqueWithoutRoleInput | Prisma.Role_PermissionUpsertWithWhereUniqueWithoutRoleInput[];
    createMany?: Prisma.Role_PermissionCreateManyRoleInputEnvelope;
    set?: Prisma.Role_PermissionWhereUniqueInput | Prisma.Role_PermissionWhereUniqueInput[];
    disconnect?: Prisma.Role_PermissionWhereUniqueInput | Prisma.Role_PermissionWhereUniqueInput[];
    delete?: Prisma.Role_PermissionWhereUniqueInput | Prisma.Role_PermissionWhereUniqueInput[];
    connect?: Prisma.Role_PermissionWhereUniqueInput | Prisma.Role_PermissionWhereUniqueInput[];
    update?: Prisma.Role_PermissionUpdateWithWhereUniqueWithoutRoleInput | Prisma.Role_PermissionUpdateWithWhereUniqueWithoutRoleInput[];
    updateMany?: Prisma.Role_PermissionUpdateManyWithWhereWithoutRoleInput | Prisma.Role_PermissionUpdateManyWithWhereWithoutRoleInput[];
    deleteMany?: Prisma.Role_PermissionScalarWhereInput | Prisma.Role_PermissionScalarWhereInput[];
};
export type Role_PermissionCreateWithoutRoleInput = {};
export type Role_PermissionUncheckedCreateWithoutRoleInput = {
    rpid?: number;
};
export type Role_PermissionCreateOrConnectWithoutRoleInput = {
    where: Prisma.Role_PermissionWhereUniqueInput;
    create: Prisma.XOR<Prisma.Role_PermissionCreateWithoutRoleInput, Prisma.Role_PermissionUncheckedCreateWithoutRoleInput>;
};
export type Role_PermissionCreateManyRoleInputEnvelope = {
    data: Prisma.Role_PermissionCreateManyRoleInput | Prisma.Role_PermissionCreateManyRoleInput[];
    skipDuplicates?: boolean;
};
export type Role_PermissionUpsertWithWhereUniqueWithoutRoleInput = {
    where: Prisma.Role_PermissionWhereUniqueInput;
    update: Prisma.XOR<Prisma.Role_PermissionUpdateWithoutRoleInput, Prisma.Role_PermissionUncheckedUpdateWithoutRoleInput>;
    create: Prisma.XOR<Prisma.Role_PermissionCreateWithoutRoleInput, Prisma.Role_PermissionUncheckedCreateWithoutRoleInput>;
};
export type Role_PermissionUpdateWithWhereUniqueWithoutRoleInput = {
    where: Prisma.Role_PermissionWhereUniqueInput;
    data: Prisma.XOR<Prisma.Role_PermissionUpdateWithoutRoleInput, Prisma.Role_PermissionUncheckedUpdateWithoutRoleInput>;
};
export type Role_PermissionUpdateManyWithWhereWithoutRoleInput = {
    where: Prisma.Role_PermissionScalarWhereInput;
    data: Prisma.XOR<Prisma.Role_PermissionUpdateManyMutationInput, Prisma.Role_PermissionUncheckedUpdateManyWithoutRoleInput>;
};
export type Role_PermissionScalarWhereInput = {
    AND?: Prisma.Role_PermissionScalarWhereInput | Prisma.Role_PermissionScalarWhereInput[];
    OR?: Prisma.Role_PermissionScalarWhereInput[];
    NOT?: Prisma.Role_PermissionScalarWhereInput | Prisma.Role_PermissionScalarWhereInput[];
    rpid?: Prisma.IntFilter<"Role_Permission"> | number;
    roleid?: Prisma.IntFilter<"Role_Permission"> | number;
};
export type Role_PermissionCreateManyRoleInput = {
    rpid?: number;
};
export type Role_PermissionUpdateWithoutRoleInput = {};
export type Role_PermissionUncheckedUpdateWithoutRoleInput = {
    rpid?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type Role_PermissionUncheckedUpdateManyWithoutRoleInput = {
    rpid?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type Role_PermissionSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    rpid?: boolean;
    roleid?: boolean;
    role?: boolean | Prisma.RoleDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["role_Permission"]>;
export type Role_PermissionSelectScalar = {
    rpid?: boolean;
    roleid?: boolean;
};
export type Role_PermissionOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"rpid" | "roleid", ExtArgs["result"]["role_Permission"]>;
export type Role_PermissionInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    role?: boolean | Prisma.RoleDefaultArgs<ExtArgs>;
};
export type $Role_PermissionPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Role_Permission";
    objects: {
        role: Prisma.$RolePayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        rpid: number;
        roleid: number;
    }, ExtArgs["result"]["role_Permission"]>;
    composites: {};
};
export type Role_PermissionGetPayload<S extends boolean | null | undefined | Role_PermissionDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$Role_PermissionPayload, S>;
export type Role_PermissionCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<Role_PermissionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: Role_PermissionCountAggregateInputType | true;
};
export interface Role_PermissionDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Role_Permission'];
        meta: {
            name: 'Role_Permission';
        };
    };
    /**
     * Find zero or one Role_Permission that matches the filter.
     * @param {Role_PermissionFindUniqueArgs} args - Arguments to find a Role_Permission
     * @example
     * // Get one Role_Permission
     * const role_Permission = await prisma.role_Permission.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends Role_PermissionFindUniqueArgs>(args: Prisma.SelectSubset<T, Role_PermissionFindUniqueArgs<ExtArgs>>): Prisma.Prisma__Role_PermissionClient<runtime.Types.Result.GetResult<Prisma.$Role_PermissionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one Role_Permission that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {Role_PermissionFindUniqueOrThrowArgs} args - Arguments to find a Role_Permission
     * @example
     * // Get one Role_Permission
     * const role_Permission = await prisma.role_Permission.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends Role_PermissionFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, Role_PermissionFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__Role_PermissionClient<runtime.Types.Result.GetResult<Prisma.$Role_PermissionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Role_Permission that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Role_PermissionFindFirstArgs} args - Arguments to find a Role_Permission
     * @example
     * // Get one Role_Permission
     * const role_Permission = await prisma.role_Permission.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends Role_PermissionFindFirstArgs>(args?: Prisma.SelectSubset<T, Role_PermissionFindFirstArgs<ExtArgs>>): Prisma.Prisma__Role_PermissionClient<runtime.Types.Result.GetResult<Prisma.$Role_PermissionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Role_Permission that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Role_PermissionFindFirstOrThrowArgs} args - Arguments to find a Role_Permission
     * @example
     * // Get one Role_Permission
     * const role_Permission = await prisma.role_Permission.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends Role_PermissionFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, Role_PermissionFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__Role_PermissionClient<runtime.Types.Result.GetResult<Prisma.$Role_PermissionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more Role_Permissions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Role_PermissionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Role_Permissions
     * const role_Permissions = await prisma.role_Permission.findMany()
     *
     * // Get first 10 Role_Permissions
     * const role_Permissions = await prisma.role_Permission.findMany({ take: 10 })
     *
     * // Only select the `rpid`
     * const role_PermissionWithRpidOnly = await prisma.role_Permission.findMany({ select: { rpid: true } })
     *
     */
    findMany<T extends Role_PermissionFindManyArgs>(args?: Prisma.SelectSubset<T, Role_PermissionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$Role_PermissionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a Role_Permission.
     * @param {Role_PermissionCreateArgs} args - Arguments to create a Role_Permission.
     * @example
     * // Create one Role_Permission
     * const Role_Permission = await prisma.role_Permission.create({
     *   data: {
     *     // ... data to create a Role_Permission
     *   }
     * })
     *
     */
    create<T extends Role_PermissionCreateArgs>(args: Prisma.SelectSubset<T, Role_PermissionCreateArgs<ExtArgs>>): Prisma.Prisma__Role_PermissionClient<runtime.Types.Result.GetResult<Prisma.$Role_PermissionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many Role_Permissions.
     * @param {Role_PermissionCreateManyArgs} args - Arguments to create many Role_Permissions.
     * @example
     * // Create many Role_Permissions
     * const role_Permission = await prisma.role_Permission.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends Role_PermissionCreateManyArgs>(args?: Prisma.SelectSubset<T, Role_PermissionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Delete a Role_Permission.
     * @param {Role_PermissionDeleteArgs} args - Arguments to delete one Role_Permission.
     * @example
     * // Delete one Role_Permission
     * const Role_Permission = await prisma.role_Permission.delete({
     *   where: {
     *     // ... filter to delete one Role_Permission
     *   }
     * })
     *
     */
    delete<T extends Role_PermissionDeleteArgs>(args: Prisma.SelectSubset<T, Role_PermissionDeleteArgs<ExtArgs>>): Prisma.Prisma__Role_PermissionClient<runtime.Types.Result.GetResult<Prisma.$Role_PermissionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one Role_Permission.
     * @param {Role_PermissionUpdateArgs} args - Arguments to update one Role_Permission.
     * @example
     * // Update one Role_Permission
     * const role_Permission = await prisma.role_Permission.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends Role_PermissionUpdateArgs>(args: Prisma.SelectSubset<T, Role_PermissionUpdateArgs<ExtArgs>>): Prisma.Prisma__Role_PermissionClient<runtime.Types.Result.GetResult<Prisma.$Role_PermissionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more Role_Permissions.
     * @param {Role_PermissionDeleteManyArgs} args - Arguments to filter Role_Permissions to delete.
     * @example
     * // Delete a few Role_Permissions
     * const { count } = await prisma.role_Permission.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends Role_PermissionDeleteManyArgs>(args?: Prisma.SelectSubset<T, Role_PermissionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Role_Permissions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Role_PermissionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Role_Permissions
     * const role_Permission = await prisma.role_Permission.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends Role_PermissionUpdateManyArgs>(args: Prisma.SelectSubset<T, Role_PermissionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create or update one Role_Permission.
     * @param {Role_PermissionUpsertArgs} args - Arguments to update or create a Role_Permission.
     * @example
     * // Update or create a Role_Permission
     * const role_Permission = await prisma.role_Permission.upsert({
     *   create: {
     *     // ... data to create a Role_Permission
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Role_Permission we want to update
     *   }
     * })
     */
    upsert<T extends Role_PermissionUpsertArgs>(args: Prisma.SelectSubset<T, Role_PermissionUpsertArgs<ExtArgs>>): Prisma.Prisma__Role_PermissionClient<runtime.Types.Result.GetResult<Prisma.$Role_PermissionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of Role_Permissions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Role_PermissionCountArgs} args - Arguments to filter Role_Permissions to count.
     * @example
     * // Count the number of Role_Permissions
     * const count = await prisma.role_Permission.count({
     *   where: {
     *     // ... the filter for the Role_Permissions we want to count
     *   }
     * })
    **/
    count<T extends Role_PermissionCountArgs>(args?: Prisma.Subset<T, Role_PermissionCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], Role_PermissionCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a Role_Permission.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Role_PermissionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Role_PermissionAggregateArgs>(args: Prisma.Subset<T, Role_PermissionAggregateArgs>): Prisma.PrismaPromise<GetRole_PermissionAggregateType<T>>;
    /**
     * Group by Role_Permission.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Role_PermissionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
    **/
    groupBy<T extends Role_PermissionGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: Role_PermissionGroupByArgs['orderBy'];
    } : {
        orderBy?: Role_PermissionGroupByArgs['orderBy'];
    }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<T['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<T['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True ? `Error: "by" must not be empty.` : HavingValid extends Prisma.False ? {
        [P in HavingFields]: P extends ByFields ? never : P extends string ? `Error: Field "${P}" used in "having" needs to be provided in "by".` : [
            Error,
            'Field ',
            P,
            ` in "having" needs to be provided in "by"`
        ];
    }[HavingFields] : 'take' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "take", you also need to provide "orderBy"' : 'skip' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "skip", you also need to provide "orderBy"' : ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, Role_PermissionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRole_PermissionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the Role_Permission model
     */
    readonly fields: Role_PermissionFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for Role_Permission.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__Role_PermissionClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    role<T extends Prisma.RoleDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.RoleDefaultArgs<ExtArgs>>): Prisma.Prisma__RoleClient<runtime.Types.Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
/**
 * Fields of the Role_Permission model
 */
export interface Role_PermissionFieldRefs {
    readonly rpid: Prisma.FieldRef<"Role_Permission", 'Int'>;
    readonly roleid: Prisma.FieldRef<"Role_Permission", 'Int'>;
}
/**
 * Role_Permission findUnique
 */
export type Role_PermissionFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role_Permission
     */
    select?: Prisma.Role_PermissionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Role_Permission
     */
    omit?: Prisma.Role_PermissionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.Role_PermissionInclude<ExtArgs> | null;
    /**
     * Filter, which Role_Permission to fetch.
     */
    where: Prisma.Role_PermissionWhereUniqueInput;
};
/**
 * Role_Permission findUniqueOrThrow
 */
export type Role_PermissionFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role_Permission
     */
    select?: Prisma.Role_PermissionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Role_Permission
     */
    omit?: Prisma.Role_PermissionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.Role_PermissionInclude<ExtArgs> | null;
    /**
     * Filter, which Role_Permission to fetch.
     */
    where: Prisma.Role_PermissionWhereUniqueInput;
};
/**
 * Role_Permission findFirst
 */
export type Role_PermissionFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role_Permission
     */
    select?: Prisma.Role_PermissionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Role_Permission
     */
    omit?: Prisma.Role_PermissionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.Role_PermissionInclude<ExtArgs> | null;
    /**
     * Filter, which Role_Permission to fetch.
     */
    where?: Prisma.Role_PermissionWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Role_Permissions to fetch.
     */
    orderBy?: Prisma.Role_PermissionOrderByWithRelationInput | Prisma.Role_PermissionOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Role_Permissions.
     */
    cursor?: Prisma.Role_PermissionWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Role_Permissions from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Role_Permissions.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Role_Permissions.
     */
    distinct?: Prisma.Role_PermissionScalarFieldEnum | Prisma.Role_PermissionScalarFieldEnum[];
};
/**
 * Role_Permission findFirstOrThrow
 */
export type Role_PermissionFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role_Permission
     */
    select?: Prisma.Role_PermissionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Role_Permission
     */
    omit?: Prisma.Role_PermissionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.Role_PermissionInclude<ExtArgs> | null;
    /**
     * Filter, which Role_Permission to fetch.
     */
    where?: Prisma.Role_PermissionWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Role_Permissions to fetch.
     */
    orderBy?: Prisma.Role_PermissionOrderByWithRelationInput | Prisma.Role_PermissionOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Role_Permissions.
     */
    cursor?: Prisma.Role_PermissionWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Role_Permissions from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Role_Permissions.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Role_Permissions.
     */
    distinct?: Prisma.Role_PermissionScalarFieldEnum | Prisma.Role_PermissionScalarFieldEnum[];
};
/**
 * Role_Permission findMany
 */
export type Role_PermissionFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role_Permission
     */
    select?: Prisma.Role_PermissionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Role_Permission
     */
    omit?: Prisma.Role_PermissionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.Role_PermissionInclude<ExtArgs> | null;
    /**
     * Filter, which Role_Permissions to fetch.
     */
    where?: Prisma.Role_PermissionWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Role_Permissions to fetch.
     */
    orderBy?: Prisma.Role_PermissionOrderByWithRelationInput | Prisma.Role_PermissionOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Role_Permissions.
     */
    cursor?: Prisma.Role_PermissionWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Role_Permissions from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Role_Permissions.
     */
    skip?: number;
    distinct?: Prisma.Role_PermissionScalarFieldEnum | Prisma.Role_PermissionScalarFieldEnum[];
};
/**
 * Role_Permission create
 */
export type Role_PermissionCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role_Permission
     */
    select?: Prisma.Role_PermissionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Role_Permission
     */
    omit?: Prisma.Role_PermissionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.Role_PermissionInclude<ExtArgs> | null;
    /**
     * The data needed to create a Role_Permission.
     */
    data: Prisma.XOR<Prisma.Role_PermissionCreateInput, Prisma.Role_PermissionUncheckedCreateInput>;
};
/**
 * Role_Permission createMany
 */
export type Role_PermissionCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many Role_Permissions.
     */
    data: Prisma.Role_PermissionCreateManyInput | Prisma.Role_PermissionCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * Role_Permission update
 */
export type Role_PermissionUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role_Permission
     */
    select?: Prisma.Role_PermissionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Role_Permission
     */
    omit?: Prisma.Role_PermissionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.Role_PermissionInclude<ExtArgs> | null;
    /**
     * The data needed to update a Role_Permission.
     */
    data: Prisma.XOR<Prisma.Role_PermissionUpdateInput, Prisma.Role_PermissionUncheckedUpdateInput>;
    /**
     * Choose, which Role_Permission to update.
     */
    where: Prisma.Role_PermissionWhereUniqueInput;
};
/**
 * Role_Permission updateMany
 */
export type Role_PermissionUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update Role_Permissions.
     */
    data: Prisma.XOR<Prisma.Role_PermissionUpdateManyMutationInput, Prisma.Role_PermissionUncheckedUpdateManyInput>;
    /**
     * Filter which Role_Permissions to update
     */
    where?: Prisma.Role_PermissionWhereInput;
    /**
     * Limit how many Role_Permissions to update.
     */
    limit?: number;
};
/**
 * Role_Permission upsert
 */
export type Role_PermissionUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role_Permission
     */
    select?: Prisma.Role_PermissionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Role_Permission
     */
    omit?: Prisma.Role_PermissionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.Role_PermissionInclude<ExtArgs> | null;
    /**
     * The filter to search for the Role_Permission to update in case it exists.
     */
    where: Prisma.Role_PermissionWhereUniqueInput;
    /**
     * In case the Role_Permission found by the `where` argument doesn't exist, create a new Role_Permission with this data.
     */
    create: Prisma.XOR<Prisma.Role_PermissionCreateInput, Prisma.Role_PermissionUncheckedCreateInput>;
    /**
     * In case the Role_Permission was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.Role_PermissionUpdateInput, Prisma.Role_PermissionUncheckedUpdateInput>;
};
/**
 * Role_Permission delete
 */
export type Role_PermissionDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role_Permission
     */
    select?: Prisma.Role_PermissionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Role_Permission
     */
    omit?: Prisma.Role_PermissionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.Role_PermissionInclude<ExtArgs> | null;
    /**
     * Filter which Role_Permission to delete.
     */
    where: Prisma.Role_PermissionWhereUniqueInput;
};
/**
 * Role_Permission deleteMany
 */
export type Role_PermissionDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which Role_Permissions to delete
     */
    where?: Prisma.Role_PermissionWhereInput;
    /**
     * Limit how many Role_Permissions to delete.
     */
    limit?: number;
};
/**
 * Role_Permission without action
 */
export type Role_PermissionDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role_Permission
     */
    select?: Prisma.Role_PermissionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Role_Permission
     */
    omit?: Prisma.Role_PermissionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.Role_PermissionInclude<ExtArgs> | null;
};
export {};
//# sourceMappingURL=Role_Permission.d.ts.map