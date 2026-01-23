import type * as runtime from "@prisma/client/runtime/library";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model Question
 *
 */
export type QuestionModel = runtime.Types.Result.DefaultSelection<Prisma.$QuestionPayload>;
export type AggregateQuestion = {
    _count: QuestionCountAggregateOutputType | null;
    _avg: QuestionAvgAggregateOutputType | null;
    _sum: QuestionSumAggregateOutputType | null;
    _min: QuestionMinAggregateOutputType | null;
    _max: QuestionMaxAggregateOutputType | null;
};
export type QuestionAvgAggregateOutputType = {
    quesid: number | null;
    userid: number | null;
    subjectid: number | null;
    chapid: number | null;
};
export type QuestionSumAggregateOutputType = {
    quesid: number | null;
    userid: number | null;
    subjectid: number | null;
    chapid: number | null;
};
export type QuestionMinAggregateOutputType = {
    quesid: number | null;
    content: string | null;
    level: $Enums.Level | null;
    userid: number | null;
    subjectid: number | null;
    chapid: number | null;
    is_delete: boolean | null;
};
export type QuestionMaxAggregateOutputType = {
    quesid: number | null;
    content: string | null;
    level: $Enums.Level | null;
    userid: number | null;
    subjectid: number | null;
    chapid: number | null;
    is_delete: boolean | null;
};
export type QuestionCountAggregateOutputType = {
    quesid: number;
    content: number;
    level: number;
    userid: number;
    subjectid: number;
    chapid: number;
    is_delete: number;
    _all: number;
};
export type QuestionAvgAggregateInputType = {
    quesid?: true;
    userid?: true;
    subjectid?: true;
    chapid?: true;
};
export type QuestionSumAggregateInputType = {
    quesid?: true;
    userid?: true;
    subjectid?: true;
    chapid?: true;
};
export type QuestionMinAggregateInputType = {
    quesid?: true;
    content?: true;
    level?: true;
    userid?: true;
    subjectid?: true;
    chapid?: true;
    is_delete?: true;
};
export type QuestionMaxAggregateInputType = {
    quesid?: true;
    content?: true;
    level?: true;
    userid?: true;
    subjectid?: true;
    chapid?: true;
    is_delete?: true;
};
export type QuestionCountAggregateInputType = {
    quesid?: true;
    content?: true;
    level?: true;
    userid?: true;
    subjectid?: true;
    chapid?: true;
    is_delete?: true;
    _all?: true;
};
export type QuestionAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which Question to aggregate.
     */
    where?: Prisma.QuestionWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Questions to fetch.
     */
    orderBy?: Prisma.QuestionOrderByWithRelationInput | Prisma.QuestionOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.QuestionWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Questions from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Questions.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Questions
    **/
    _count?: true | QuestionCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: QuestionAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: QuestionSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: QuestionMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: QuestionMaxAggregateInputType;
};
export type GetQuestionAggregateType<T extends QuestionAggregateArgs> = {
    [P in keyof T & keyof AggregateQuestion]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateQuestion[P]> : Prisma.GetScalarType<T[P], AggregateQuestion[P]>;
};
export type QuestionGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.QuestionWhereInput;
    orderBy?: Prisma.QuestionOrderByWithAggregationInput | Prisma.QuestionOrderByWithAggregationInput[];
    by: Prisma.QuestionScalarFieldEnum[] | Prisma.QuestionScalarFieldEnum;
    having?: Prisma.QuestionScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: QuestionCountAggregateInputType | true;
    _avg?: QuestionAvgAggregateInputType;
    _sum?: QuestionSumAggregateInputType;
    _min?: QuestionMinAggregateInputType;
    _max?: QuestionMaxAggregateInputType;
};
export type QuestionGroupByOutputType = {
    quesid: number;
    content: string;
    level: $Enums.Level;
    userid: number;
    subjectid: number;
    chapid: number;
    is_delete: boolean;
    _count: QuestionCountAggregateOutputType | null;
    _avg: QuestionAvgAggregateOutputType | null;
    _sum: QuestionSumAggregateOutputType | null;
    _min: QuestionMinAggregateOutputType | null;
    _max: QuestionMaxAggregateOutputType | null;
};
type GetQuestionGroupByPayload<T extends QuestionGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<QuestionGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof QuestionGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], QuestionGroupByOutputType[P]> : Prisma.GetScalarType<T[P], QuestionGroupByOutputType[P]>;
}>>;
export type QuestionWhereInput = {
    AND?: Prisma.QuestionWhereInput | Prisma.QuestionWhereInput[];
    OR?: Prisma.QuestionWhereInput[];
    NOT?: Prisma.QuestionWhereInput | Prisma.QuestionWhereInput[];
    quesid?: Prisma.IntFilter<"Question"> | number;
    content?: Prisma.StringFilter<"Question"> | string;
    level?: Prisma.EnumLevelFilter<"Question"> | $Enums.Level;
    userid?: Prisma.IntFilter<"Question"> | number;
    subjectid?: Prisma.IntFilter<"Question"> | number;
    chapid?: Prisma.IntFilter<"Question"> | number;
    is_delete?: Prisma.BoolFilter<"Question"> | boolean;
    author?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    subject?: Prisma.XOR<Prisma.SubjectScalarRelationFilter, Prisma.SubjectWhereInput>;
    chapter?: Prisma.XOR<Prisma.ChapterScalarRelationFilter, Prisma.ChapterWhereInput>;
    answer?: Prisma.AnswerListRelationFilter;
    exam_question?: Prisma.Exam_QuestionListRelationFilter;
    attempt_answer?: Prisma.Attempt_AnswerListRelationFilter;
};
export type QuestionOrderByWithRelationInput = {
    quesid?: Prisma.SortOrder;
    content?: Prisma.SortOrder;
    level?: Prisma.SortOrder;
    userid?: Prisma.SortOrder;
    subjectid?: Prisma.SortOrder;
    chapid?: Prisma.SortOrder;
    is_delete?: Prisma.SortOrder;
    author?: Prisma.UserOrderByWithRelationInput;
    subject?: Prisma.SubjectOrderByWithRelationInput;
    chapter?: Prisma.ChapterOrderByWithRelationInput;
    answer?: Prisma.AnswerOrderByRelationAggregateInput;
    exam_question?: Prisma.Exam_QuestionOrderByRelationAggregateInput;
    attempt_answer?: Prisma.Attempt_AnswerOrderByRelationAggregateInput;
    _relevance?: Prisma.QuestionOrderByRelevanceInput;
};
export type QuestionWhereUniqueInput = Prisma.AtLeast<{
    quesid?: number;
    AND?: Prisma.QuestionWhereInput | Prisma.QuestionWhereInput[];
    OR?: Prisma.QuestionWhereInput[];
    NOT?: Prisma.QuestionWhereInput | Prisma.QuestionWhereInput[];
    content?: Prisma.StringFilter<"Question"> | string;
    level?: Prisma.EnumLevelFilter<"Question"> | $Enums.Level;
    userid?: Prisma.IntFilter<"Question"> | number;
    subjectid?: Prisma.IntFilter<"Question"> | number;
    chapid?: Prisma.IntFilter<"Question"> | number;
    is_delete?: Prisma.BoolFilter<"Question"> | boolean;
    author?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    subject?: Prisma.XOR<Prisma.SubjectScalarRelationFilter, Prisma.SubjectWhereInput>;
    chapter?: Prisma.XOR<Prisma.ChapterScalarRelationFilter, Prisma.ChapterWhereInput>;
    answer?: Prisma.AnswerListRelationFilter;
    exam_question?: Prisma.Exam_QuestionListRelationFilter;
    attempt_answer?: Prisma.Attempt_AnswerListRelationFilter;
}, "quesid">;
export type QuestionOrderByWithAggregationInput = {
    quesid?: Prisma.SortOrder;
    content?: Prisma.SortOrder;
    level?: Prisma.SortOrder;
    userid?: Prisma.SortOrder;
    subjectid?: Prisma.SortOrder;
    chapid?: Prisma.SortOrder;
    is_delete?: Prisma.SortOrder;
    _count?: Prisma.QuestionCountOrderByAggregateInput;
    _avg?: Prisma.QuestionAvgOrderByAggregateInput;
    _max?: Prisma.QuestionMaxOrderByAggregateInput;
    _min?: Prisma.QuestionMinOrderByAggregateInput;
    _sum?: Prisma.QuestionSumOrderByAggregateInput;
};
export type QuestionScalarWhereWithAggregatesInput = {
    AND?: Prisma.QuestionScalarWhereWithAggregatesInput | Prisma.QuestionScalarWhereWithAggregatesInput[];
    OR?: Prisma.QuestionScalarWhereWithAggregatesInput[];
    NOT?: Prisma.QuestionScalarWhereWithAggregatesInput | Prisma.QuestionScalarWhereWithAggregatesInput[];
    quesid?: Prisma.IntWithAggregatesFilter<"Question"> | number;
    content?: Prisma.StringWithAggregatesFilter<"Question"> | string;
    level?: Prisma.EnumLevelWithAggregatesFilter<"Question"> | $Enums.Level;
    userid?: Prisma.IntWithAggregatesFilter<"Question"> | number;
    subjectid?: Prisma.IntWithAggregatesFilter<"Question"> | number;
    chapid?: Prisma.IntWithAggregatesFilter<"Question"> | number;
    is_delete?: Prisma.BoolWithAggregatesFilter<"Question"> | boolean;
};
export type QuestionCreateInput = {
    content: string;
    level?: $Enums.Level;
    is_delete?: boolean;
    author: Prisma.UserCreateNestedOneWithoutQuestionInput;
    subject: Prisma.SubjectCreateNestedOneWithoutQuestionInput;
    chapter: Prisma.ChapterCreateNestedOneWithoutQuestionInput;
    answer?: Prisma.AnswerCreateNestedManyWithoutQuestionInput;
    exam_question?: Prisma.Exam_QuestionCreateNestedManyWithoutQuestionInput;
    attempt_answer?: Prisma.Attempt_AnswerCreateNestedManyWithoutQuestionInput;
};
export type QuestionUncheckedCreateInput = {
    quesid?: number;
    content: string;
    level?: $Enums.Level;
    userid: number;
    subjectid: number;
    chapid: number;
    is_delete?: boolean;
    answer?: Prisma.AnswerUncheckedCreateNestedManyWithoutQuestionInput;
    exam_question?: Prisma.Exam_QuestionUncheckedCreateNestedManyWithoutQuestionInput;
    attempt_answer?: Prisma.Attempt_AnswerUncheckedCreateNestedManyWithoutQuestionInput;
};
export type QuestionUpdateInput = {
    content?: Prisma.StringFieldUpdateOperationsInput | string;
    level?: Prisma.EnumLevelFieldUpdateOperationsInput | $Enums.Level;
    is_delete?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    author?: Prisma.UserUpdateOneRequiredWithoutQuestionNestedInput;
    subject?: Prisma.SubjectUpdateOneRequiredWithoutQuestionNestedInput;
    chapter?: Prisma.ChapterUpdateOneRequiredWithoutQuestionNestedInput;
    answer?: Prisma.AnswerUpdateManyWithoutQuestionNestedInput;
    exam_question?: Prisma.Exam_QuestionUpdateManyWithoutQuestionNestedInput;
    attempt_answer?: Prisma.Attempt_AnswerUpdateManyWithoutQuestionNestedInput;
};
export type QuestionUncheckedUpdateInput = {
    quesid?: Prisma.IntFieldUpdateOperationsInput | number;
    content?: Prisma.StringFieldUpdateOperationsInput | string;
    level?: Prisma.EnumLevelFieldUpdateOperationsInput | $Enums.Level;
    userid?: Prisma.IntFieldUpdateOperationsInput | number;
    subjectid?: Prisma.IntFieldUpdateOperationsInput | number;
    chapid?: Prisma.IntFieldUpdateOperationsInput | number;
    is_delete?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    answer?: Prisma.AnswerUncheckedUpdateManyWithoutQuestionNestedInput;
    exam_question?: Prisma.Exam_QuestionUncheckedUpdateManyWithoutQuestionNestedInput;
    attempt_answer?: Prisma.Attempt_AnswerUncheckedUpdateManyWithoutQuestionNestedInput;
};
export type QuestionCreateManyInput = {
    quesid?: number;
    content: string;
    level?: $Enums.Level;
    userid: number;
    subjectid: number;
    chapid: number;
    is_delete?: boolean;
};
export type QuestionUpdateManyMutationInput = {
    content?: Prisma.StringFieldUpdateOperationsInput | string;
    level?: Prisma.EnumLevelFieldUpdateOperationsInput | $Enums.Level;
    is_delete?: Prisma.BoolFieldUpdateOperationsInput | boolean;
};
export type QuestionUncheckedUpdateManyInput = {
    quesid?: Prisma.IntFieldUpdateOperationsInput | number;
    content?: Prisma.StringFieldUpdateOperationsInput | string;
    level?: Prisma.EnumLevelFieldUpdateOperationsInput | $Enums.Level;
    userid?: Prisma.IntFieldUpdateOperationsInput | number;
    subjectid?: Prisma.IntFieldUpdateOperationsInput | number;
    chapid?: Prisma.IntFieldUpdateOperationsInput | number;
    is_delete?: Prisma.BoolFieldUpdateOperationsInput | boolean;
};
export type QuestionListRelationFilter = {
    every?: Prisma.QuestionWhereInput;
    some?: Prisma.QuestionWhereInput;
    none?: Prisma.QuestionWhereInput;
};
export type QuestionOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type QuestionOrderByRelevanceInput = {
    fields: Prisma.QuestionOrderByRelevanceFieldEnum | Prisma.QuestionOrderByRelevanceFieldEnum[];
    sort: Prisma.SortOrder;
    search: string;
};
export type QuestionCountOrderByAggregateInput = {
    quesid?: Prisma.SortOrder;
    content?: Prisma.SortOrder;
    level?: Prisma.SortOrder;
    userid?: Prisma.SortOrder;
    subjectid?: Prisma.SortOrder;
    chapid?: Prisma.SortOrder;
    is_delete?: Prisma.SortOrder;
};
export type QuestionAvgOrderByAggregateInput = {
    quesid?: Prisma.SortOrder;
    userid?: Prisma.SortOrder;
    subjectid?: Prisma.SortOrder;
    chapid?: Prisma.SortOrder;
};
export type QuestionMaxOrderByAggregateInput = {
    quesid?: Prisma.SortOrder;
    content?: Prisma.SortOrder;
    level?: Prisma.SortOrder;
    userid?: Prisma.SortOrder;
    subjectid?: Prisma.SortOrder;
    chapid?: Prisma.SortOrder;
    is_delete?: Prisma.SortOrder;
};
export type QuestionMinOrderByAggregateInput = {
    quesid?: Prisma.SortOrder;
    content?: Prisma.SortOrder;
    level?: Prisma.SortOrder;
    userid?: Prisma.SortOrder;
    subjectid?: Prisma.SortOrder;
    chapid?: Prisma.SortOrder;
    is_delete?: Prisma.SortOrder;
};
export type QuestionSumOrderByAggregateInput = {
    quesid?: Prisma.SortOrder;
    userid?: Prisma.SortOrder;
    subjectid?: Prisma.SortOrder;
    chapid?: Prisma.SortOrder;
};
export type QuestionScalarRelationFilter = {
    is?: Prisma.QuestionWhereInput;
    isNot?: Prisma.QuestionWhereInput;
};
export type QuestionCreateNestedManyWithoutAuthorInput = {
    create?: Prisma.XOR<Prisma.QuestionCreateWithoutAuthorInput, Prisma.QuestionUncheckedCreateWithoutAuthorInput> | Prisma.QuestionCreateWithoutAuthorInput[] | Prisma.QuestionUncheckedCreateWithoutAuthorInput[];
    connectOrCreate?: Prisma.QuestionCreateOrConnectWithoutAuthorInput | Prisma.QuestionCreateOrConnectWithoutAuthorInput[];
    createMany?: Prisma.QuestionCreateManyAuthorInputEnvelope;
    connect?: Prisma.QuestionWhereUniqueInput | Prisma.QuestionWhereUniqueInput[];
};
export type QuestionUncheckedCreateNestedManyWithoutAuthorInput = {
    create?: Prisma.XOR<Prisma.QuestionCreateWithoutAuthorInput, Prisma.QuestionUncheckedCreateWithoutAuthorInput> | Prisma.QuestionCreateWithoutAuthorInput[] | Prisma.QuestionUncheckedCreateWithoutAuthorInput[];
    connectOrCreate?: Prisma.QuestionCreateOrConnectWithoutAuthorInput | Prisma.QuestionCreateOrConnectWithoutAuthorInput[];
    createMany?: Prisma.QuestionCreateManyAuthorInputEnvelope;
    connect?: Prisma.QuestionWhereUniqueInput | Prisma.QuestionWhereUniqueInput[];
};
export type QuestionUpdateManyWithoutAuthorNestedInput = {
    create?: Prisma.XOR<Prisma.QuestionCreateWithoutAuthorInput, Prisma.QuestionUncheckedCreateWithoutAuthorInput> | Prisma.QuestionCreateWithoutAuthorInput[] | Prisma.QuestionUncheckedCreateWithoutAuthorInput[];
    connectOrCreate?: Prisma.QuestionCreateOrConnectWithoutAuthorInput | Prisma.QuestionCreateOrConnectWithoutAuthorInput[];
    upsert?: Prisma.QuestionUpsertWithWhereUniqueWithoutAuthorInput | Prisma.QuestionUpsertWithWhereUniqueWithoutAuthorInput[];
    createMany?: Prisma.QuestionCreateManyAuthorInputEnvelope;
    set?: Prisma.QuestionWhereUniqueInput | Prisma.QuestionWhereUniqueInput[];
    disconnect?: Prisma.QuestionWhereUniqueInput | Prisma.QuestionWhereUniqueInput[];
    delete?: Prisma.QuestionWhereUniqueInput | Prisma.QuestionWhereUniqueInput[];
    connect?: Prisma.QuestionWhereUniqueInput | Prisma.QuestionWhereUniqueInput[];
    update?: Prisma.QuestionUpdateWithWhereUniqueWithoutAuthorInput | Prisma.QuestionUpdateWithWhereUniqueWithoutAuthorInput[];
    updateMany?: Prisma.QuestionUpdateManyWithWhereWithoutAuthorInput | Prisma.QuestionUpdateManyWithWhereWithoutAuthorInput[];
    deleteMany?: Prisma.QuestionScalarWhereInput | Prisma.QuestionScalarWhereInput[];
};
export type QuestionUncheckedUpdateManyWithoutAuthorNestedInput = {
    create?: Prisma.XOR<Prisma.QuestionCreateWithoutAuthorInput, Prisma.QuestionUncheckedCreateWithoutAuthorInput> | Prisma.QuestionCreateWithoutAuthorInput[] | Prisma.QuestionUncheckedCreateWithoutAuthorInput[];
    connectOrCreate?: Prisma.QuestionCreateOrConnectWithoutAuthorInput | Prisma.QuestionCreateOrConnectWithoutAuthorInput[];
    upsert?: Prisma.QuestionUpsertWithWhereUniqueWithoutAuthorInput | Prisma.QuestionUpsertWithWhereUniqueWithoutAuthorInput[];
    createMany?: Prisma.QuestionCreateManyAuthorInputEnvelope;
    set?: Prisma.QuestionWhereUniqueInput | Prisma.QuestionWhereUniqueInput[];
    disconnect?: Prisma.QuestionWhereUniqueInput | Prisma.QuestionWhereUniqueInput[];
    delete?: Prisma.QuestionWhereUniqueInput | Prisma.QuestionWhereUniqueInput[];
    connect?: Prisma.QuestionWhereUniqueInput | Prisma.QuestionWhereUniqueInput[];
    update?: Prisma.QuestionUpdateWithWhereUniqueWithoutAuthorInput | Prisma.QuestionUpdateWithWhereUniqueWithoutAuthorInput[];
    updateMany?: Prisma.QuestionUpdateManyWithWhereWithoutAuthorInput | Prisma.QuestionUpdateManyWithWhereWithoutAuthorInput[];
    deleteMany?: Prisma.QuestionScalarWhereInput | Prisma.QuestionScalarWhereInput[];
};
export type QuestionCreateNestedManyWithoutSubjectInput = {
    create?: Prisma.XOR<Prisma.QuestionCreateWithoutSubjectInput, Prisma.QuestionUncheckedCreateWithoutSubjectInput> | Prisma.QuestionCreateWithoutSubjectInput[] | Prisma.QuestionUncheckedCreateWithoutSubjectInput[];
    connectOrCreate?: Prisma.QuestionCreateOrConnectWithoutSubjectInput | Prisma.QuestionCreateOrConnectWithoutSubjectInput[];
    createMany?: Prisma.QuestionCreateManySubjectInputEnvelope;
    connect?: Prisma.QuestionWhereUniqueInput | Prisma.QuestionWhereUniqueInput[];
};
export type QuestionUncheckedCreateNestedManyWithoutSubjectInput = {
    create?: Prisma.XOR<Prisma.QuestionCreateWithoutSubjectInput, Prisma.QuestionUncheckedCreateWithoutSubjectInput> | Prisma.QuestionCreateWithoutSubjectInput[] | Prisma.QuestionUncheckedCreateWithoutSubjectInput[];
    connectOrCreate?: Prisma.QuestionCreateOrConnectWithoutSubjectInput | Prisma.QuestionCreateOrConnectWithoutSubjectInput[];
    createMany?: Prisma.QuestionCreateManySubjectInputEnvelope;
    connect?: Prisma.QuestionWhereUniqueInput | Prisma.QuestionWhereUniqueInput[];
};
export type QuestionUpdateManyWithoutSubjectNestedInput = {
    create?: Prisma.XOR<Prisma.QuestionCreateWithoutSubjectInput, Prisma.QuestionUncheckedCreateWithoutSubjectInput> | Prisma.QuestionCreateWithoutSubjectInput[] | Prisma.QuestionUncheckedCreateWithoutSubjectInput[];
    connectOrCreate?: Prisma.QuestionCreateOrConnectWithoutSubjectInput | Prisma.QuestionCreateOrConnectWithoutSubjectInput[];
    upsert?: Prisma.QuestionUpsertWithWhereUniqueWithoutSubjectInput | Prisma.QuestionUpsertWithWhereUniqueWithoutSubjectInput[];
    createMany?: Prisma.QuestionCreateManySubjectInputEnvelope;
    set?: Prisma.QuestionWhereUniqueInput | Prisma.QuestionWhereUniqueInput[];
    disconnect?: Prisma.QuestionWhereUniqueInput | Prisma.QuestionWhereUniqueInput[];
    delete?: Prisma.QuestionWhereUniqueInput | Prisma.QuestionWhereUniqueInput[];
    connect?: Prisma.QuestionWhereUniqueInput | Prisma.QuestionWhereUniqueInput[];
    update?: Prisma.QuestionUpdateWithWhereUniqueWithoutSubjectInput | Prisma.QuestionUpdateWithWhereUniqueWithoutSubjectInput[];
    updateMany?: Prisma.QuestionUpdateManyWithWhereWithoutSubjectInput | Prisma.QuestionUpdateManyWithWhereWithoutSubjectInput[];
    deleteMany?: Prisma.QuestionScalarWhereInput | Prisma.QuestionScalarWhereInput[];
};
export type QuestionUncheckedUpdateManyWithoutSubjectNestedInput = {
    create?: Prisma.XOR<Prisma.QuestionCreateWithoutSubjectInput, Prisma.QuestionUncheckedCreateWithoutSubjectInput> | Prisma.QuestionCreateWithoutSubjectInput[] | Prisma.QuestionUncheckedCreateWithoutSubjectInput[];
    connectOrCreate?: Prisma.QuestionCreateOrConnectWithoutSubjectInput | Prisma.QuestionCreateOrConnectWithoutSubjectInput[];
    upsert?: Prisma.QuestionUpsertWithWhereUniqueWithoutSubjectInput | Prisma.QuestionUpsertWithWhereUniqueWithoutSubjectInput[];
    createMany?: Prisma.QuestionCreateManySubjectInputEnvelope;
    set?: Prisma.QuestionWhereUniqueInput | Prisma.QuestionWhereUniqueInput[];
    disconnect?: Prisma.QuestionWhereUniqueInput | Prisma.QuestionWhereUniqueInput[];
    delete?: Prisma.QuestionWhereUniqueInput | Prisma.QuestionWhereUniqueInput[];
    connect?: Prisma.QuestionWhereUniqueInput | Prisma.QuestionWhereUniqueInput[];
    update?: Prisma.QuestionUpdateWithWhereUniqueWithoutSubjectInput | Prisma.QuestionUpdateWithWhereUniqueWithoutSubjectInput[];
    updateMany?: Prisma.QuestionUpdateManyWithWhereWithoutSubjectInput | Prisma.QuestionUpdateManyWithWhereWithoutSubjectInput[];
    deleteMany?: Prisma.QuestionScalarWhereInput | Prisma.QuestionScalarWhereInput[];
};
export type QuestionCreateNestedManyWithoutChapterInput = {
    create?: Prisma.XOR<Prisma.QuestionCreateWithoutChapterInput, Prisma.QuestionUncheckedCreateWithoutChapterInput> | Prisma.QuestionCreateWithoutChapterInput[] | Prisma.QuestionUncheckedCreateWithoutChapterInput[];
    connectOrCreate?: Prisma.QuestionCreateOrConnectWithoutChapterInput | Prisma.QuestionCreateOrConnectWithoutChapterInput[];
    createMany?: Prisma.QuestionCreateManyChapterInputEnvelope;
    connect?: Prisma.QuestionWhereUniqueInput | Prisma.QuestionWhereUniqueInput[];
};
export type QuestionUncheckedCreateNestedManyWithoutChapterInput = {
    create?: Prisma.XOR<Prisma.QuestionCreateWithoutChapterInput, Prisma.QuestionUncheckedCreateWithoutChapterInput> | Prisma.QuestionCreateWithoutChapterInput[] | Prisma.QuestionUncheckedCreateWithoutChapterInput[];
    connectOrCreate?: Prisma.QuestionCreateOrConnectWithoutChapterInput | Prisma.QuestionCreateOrConnectWithoutChapterInput[];
    createMany?: Prisma.QuestionCreateManyChapterInputEnvelope;
    connect?: Prisma.QuestionWhereUniqueInput | Prisma.QuestionWhereUniqueInput[];
};
export type QuestionUpdateManyWithoutChapterNestedInput = {
    create?: Prisma.XOR<Prisma.QuestionCreateWithoutChapterInput, Prisma.QuestionUncheckedCreateWithoutChapterInput> | Prisma.QuestionCreateWithoutChapterInput[] | Prisma.QuestionUncheckedCreateWithoutChapterInput[];
    connectOrCreate?: Prisma.QuestionCreateOrConnectWithoutChapterInput | Prisma.QuestionCreateOrConnectWithoutChapterInput[];
    upsert?: Prisma.QuestionUpsertWithWhereUniqueWithoutChapterInput | Prisma.QuestionUpsertWithWhereUniqueWithoutChapterInput[];
    createMany?: Prisma.QuestionCreateManyChapterInputEnvelope;
    set?: Prisma.QuestionWhereUniqueInput | Prisma.QuestionWhereUniqueInput[];
    disconnect?: Prisma.QuestionWhereUniqueInput | Prisma.QuestionWhereUniqueInput[];
    delete?: Prisma.QuestionWhereUniqueInput | Prisma.QuestionWhereUniqueInput[];
    connect?: Prisma.QuestionWhereUniqueInput | Prisma.QuestionWhereUniqueInput[];
    update?: Prisma.QuestionUpdateWithWhereUniqueWithoutChapterInput | Prisma.QuestionUpdateWithWhereUniqueWithoutChapterInput[];
    updateMany?: Prisma.QuestionUpdateManyWithWhereWithoutChapterInput | Prisma.QuestionUpdateManyWithWhereWithoutChapterInput[];
    deleteMany?: Prisma.QuestionScalarWhereInput | Prisma.QuestionScalarWhereInput[];
};
export type QuestionUncheckedUpdateManyWithoutChapterNestedInput = {
    create?: Prisma.XOR<Prisma.QuestionCreateWithoutChapterInput, Prisma.QuestionUncheckedCreateWithoutChapterInput> | Prisma.QuestionCreateWithoutChapterInput[] | Prisma.QuestionUncheckedCreateWithoutChapterInput[];
    connectOrCreate?: Prisma.QuestionCreateOrConnectWithoutChapterInput | Prisma.QuestionCreateOrConnectWithoutChapterInput[];
    upsert?: Prisma.QuestionUpsertWithWhereUniqueWithoutChapterInput | Prisma.QuestionUpsertWithWhereUniqueWithoutChapterInput[];
    createMany?: Prisma.QuestionCreateManyChapterInputEnvelope;
    set?: Prisma.QuestionWhereUniqueInput | Prisma.QuestionWhereUniqueInput[];
    disconnect?: Prisma.QuestionWhereUniqueInput | Prisma.QuestionWhereUniqueInput[];
    delete?: Prisma.QuestionWhereUniqueInput | Prisma.QuestionWhereUniqueInput[];
    connect?: Prisma.QuestionWhereUniqueInput | Prisma.QuestionWhereUniqueInput[];
    update?: Prisma.QuestionUpdateWithWhereUniqueWithoutChapterInput | Prisma.QuestionUpdateWithWhereUniqueWithoutChapterInput[];
    updateMany?: Prisma.QuestionUpdateManyWithWhereWithoutChapterInput | Prisma.QuestionUpdateManyWithWhereWithoutChapterInput[];
    deleteMany?: Prisma.QuestionScalarWhereInput | Prisma.QuestionScalarWhereInput[];
};
export type EnumLevelFieldUpdateOperationsInput = {
    set?: $Enums.Level;
};
export type QuestionCreateNestedOneWithoutAnswerInput = {
    create?: Prisma.XOR<Prisma.QuestionCreateWithoutAnswerInput, Prisma.QuestionUncheckedCreateWithoutAnswerInput>;
    connectOrCreate?: Prisma.QuestionCreateOrConnectWithoutAnswerInput;
    connect?: Prisma.QuestionWhereUniqueInput;
};
export type QuestionUpdateOneRequiredWithoutAnswerNestedInput = {
    create?: Prisma.XOR<Prisma.QuestionCreateWithoutAnswerInput, Prisma.QuestionUncheckedCreateWithoutAnswerInput>;
    connectOrCreate?: Prisma.QuestionCreateOrConnectWithoutAnswerInput;
    upsert?: Prisma.QuestionUpsertWithoutAnswerInput;
    connect?: Prisma.QuestionWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.QuestionUpdateToOneWithWhereWithoutAnswerInput, Prisma.QuestionUpdateWithoutAnswerInput>, Prisma.QuestionUncheckedUpdateWithoutAnswerInput>;
};
export type QuestionCreateNestedOneWithoutExam_questionInput = {
    create?: Prisma.XOR<Prisma.QuestionCreateWithoutExam_questionInput, Prisma.QuestionUncheckedCreateWithoutExam_questionInput>;
    connectOrCreate?: Prisma.QuestionCreateOrConnectWithoutExam_questionInput;
    connect?: Prisma.QuestionWhereUniqueInput;
};
export type QuestionUpdateOneRequiredWithoutExam_questionNestedInput = {
    create?: Prisma.XOR<Prisma.QuestionCreateWithoutExam_questionInput, Prisma.QuestionUncheckedCreateWithoutExam_questionInput>;
    connectOrCreate?: Prisma.QuestionCreateOrConnectWithoutExam_questionInput;
    upsert?: Prisma.QuestionUpsertWithoutExam_questionInput;
    connect?: Prisma.QuestionWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.QuestionUpdateToOneWithWhereWithoutExam_questionInput, Prisma.QuestionUpdateWithoutExam_questionInput>, Prisma.QuestionUncheckedUpdateWithoutExam_questionInput>;
};
export type QuestionCreateNestedOneWithoutAttempt_answerInput = {
    create?: Prisma.XOR<Prisma.QuestionCreateWithoutAttempt_answerInput, Prisma.QuestionUncheckedCreateWithoutAttempt_answerInput>;
    connectOrCreate?: Prisma.QuestionCreateOrConnectWithoutAttempt_answerInput;
    connect?: Prisma.QuestionWhereUniqueInput;
};
export type QuestionUpdateOneRequiredWithoutAttempt_answerNestedInput = {
    create?: Prisma.XOR<Prisma.QuestionCreateWithoutAttempt_answerInput, Prisma.QuestionUncheckedCreateWithoutAttempt_answerInput>;
    connectOrCreate?: Prisma.QuestionCreateOrConnectWithoutAttempt_answerInput;
    upsert?: Prisma.QuestionUpsertWithoutAttempt_answerInput;
    connect?: Prisma.QuestionWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.QuestionUpdateToOneWithWhereWithoutAttempt_answerInput, Prisma.QuestionUpdateWithoutAttempt_answerInput>, Prisma.QuestionUncheckedUpdateWithoutAttempt_answerInput>;
};
export type QuestionCreateWithoutAuthorInput = {
    content: string;
    level?: $Enums.Level;
    is_delete?: boolean;
    subject: Prisma.SubjectCreateNestedOneWithoutQuestionInput;
    chapter: Prisma.ChapterCreateNestedOneWithoutQuestionInput;
    answer?: Prisma.AnswerCreateNestedManyWithoutQuestionInput;
    exam_question?: Prisma.Exam_QuestionCreateNestedManyWithoutQuestionInput;
    attempt_answer?: Prisma.Attempt_AnswerCreateNestedManyWithoutQuestionInput;
};
export type QuestionUncheckedCreateWithoutAuthorInput = {
    quesid?: number;
    content: string;
    level?: $Enums.Level;
    subjectid: number;
    chapid: number;
    is_delete?: boolean;
    answer?: Prisma.AnswerUncheckedCreateNestedManyWithoutQuestionInput;
    exam_question?: Prisma.Exam_QuestionUncheckedCreateNestedManyWithoutQuestionInput;
    attempt_answer?: Prisma.Attempt_AnswerUncheckedCreateNestedManyWithoutQuestionInput;
};
export type QuestionCreateOrConnectWithoutAuthorInput = {
    where: Prisma.QuestionWhereUniqueInput;
    create: Prisma.XOR<Prisma.QuestionCreateWithoutAuthorInput, Prisma.QuestionUncheckedCreateWithoutAuthorInput>;
};
export type QuestionCreateManyAuthorInputEnvelope = {
    data: Prisma.QuestionCreateManyAuthorInput | Prisma.QuestionCreateManyAuthorInput[];
    skipDuplicates?: boolean;
};
export type QuestionUpsertWithWhereUniqueWithoutAuthorInput = {
    where: Prisma.QuestionWhereUniqueInput;
    update: Prisma.XOR<Prisma.QuestionUpdateWithoutAuthorInput, Prisma.QuestionUncheckedUpdateWithoutAuthorInput>;
    create: Prisma.XOR<Prisma.QuestionCreateWithoutAuthorInput, Prisma.QuestionUncheckedCreateWithoutAuthorInput>;
};
export type QuestionUpdateWithWhereUniqueWithoutAuthorInput = {
    where: Prisma.QuestionWhereUniqueInput;
    data: Prisma.XOR<Prisma.QuestionUpdateWithoutAuthorInput, Prisma.QuestionUncheckedUpdateWithoutAuthorInput>;
};
export type QuestionUpdateManyWithWhereWithoutAuthorInput = {
    where: Prisma.QuestionScalarWhereInput;
    data: Prisma.XOR<Prisma.QuestionUpdateManyMutationInput, Prisma.QuestionUncheckedUpdateManyWithoutAuthorInput>;
};
export type QuestionScalarWhereInput = {
    AND?: Prisma.QuestionScalarWhereInput | Prisma.QuestionScalarWhereInput[];
    OR?: Prisma.QuestionScalarWhereInput[];
    NOT?: Prisma.QuestionScalarWhereInput | Prisma.QuestionScalarWhereInput[];
    quesid?: Prisma.IntFilter<"Question"> | number;
    content?: Prisma.StringFilter<"Question"> | string;
    level?: Prisma.EnumLevelFilter<"Question"> | $Enums.Level;
    userid?: Prisma.IntFilter<"Question"> | number;
    subjectid?: Prisma.IntFilter<"Question"> | number;
    chapid?: Prisma.IntFilter<"Question"> | number;
    is_delete?: Prisma.BoolFilter<"Question"> | boolean;
};
export type QuestionCreateWithoutSubjectInput = {
    content: string;
    level?: $Enums.Level;
    is_delete?: boolean;
    author: Prisma.UserCreateNestedOneWithoutQuestionInput;
    chapter: Prisma.ChapterCreateNestedOneWithoutQuestionInput;
    answer?: Prisma.AnswerCreateNestedManyWithoutQuestionInput;
    exam_question?: Prisma.Exam_QuestionCreateNestedManyWithoutQuestionInput;
    attempt_answer?: Prisma.Attempt_AnswerCreateNestedManyWithoutQuestionInput;
};
export type QuestionUncheckedCreateWithoutSubjectInput = {
    quesid?: number;
    content: string;
    level?: $Enums.Level;
    userid: number;
    chapid: number;
    is_delete?: boolean;
    answer?: Prisma.AnswerUncheckedCreateNestedManyWithoutQuestionInput;
    exam_question?: Prisma.Exam_QuestionUncheckedCreateNestedManyWithoutQuestionInput;
    attempt_answer?: Prisma.Attempt_AnswerUncheckedCreateNestedManyWithoutQuestionInput;
};
export type QuestionCreateOrConnectWithoutSubjectInput = {
    where: Prisma.QuestionWhereUniqueInput;
    create: Prisma.XOR<Prisma.QuestionCreateWithoutSubjectInput, Prisma.QuestionUncheckedCreateWithoutSubjectInput>;
};
export type QuestionCreateManySubjectInputEnvelope = {
    data: Prisma.QuestionCreateManySubjectInput | Prisma.QuestionCreateManySubjectInput[];
    skipDuplicates?: boolean;
};
export type QuestionUpsertWithWhereUniqueWithoutSubjectInput = {
    where: Prisma.QuestionWhereUniqueInput;
    update: Prisma.XOR<Prisma.QuestionUpdateWithoutSubjectInput, Prisma.QuestionUncheckedUpdateWithoutSubjectInput>;
    create: Prisma.XOR<Prisma.QuestionCreateWithoutSubjectInput, Prisma.QuestionUncheckedCreateWithoutSubjectInput>;
};
export type QuestionUpdateWithWhereUniqueWithoutSubjectInput = {
    where: Prisma.QuestionWhereUniqueInput;
    data: Prisma.XOR<Prisma.QuestionUpdateWithoutSubjectInput, Prisma.QuestionUncheckedUpdateWithoutSubjectInput>;
};
export type QuestionUpdateManyWithWhereWithoutSubjectInput = {
    where: Prisma.QuestionScalarWhereInput;
    data: Prisma.XOR<Prisma.QuestionUpdateManyMutationInput, Prisma.QuestionUncheckedUpdateManyWithoutSubjectInput>;
};
export type QuestionCreateWithoutChapterInput = {
    content: string;
    level?: $Enums.Level;
    is_delete?: boolean;
    author: Prisma.UserCreateNestedOneWithoutQuestionInput;
    subject: Prisma.SubjectCreateNestedOneWithoutQuestionInput;
    answer?: Prisma.AnswerCreateNestedManyWithoutQuestionInput;
    exam_question?: Prisma.Exam_QuestionCreateNestedManyWithoutQuestionInput;
    attempt_answer?: Prisma.Attempt_AnswerCreateNestedManyWithoutQuestionInput;
};
export type QuestionUncheckedCreateWithoutChapterInput = {
    quesid?: number;
    content: string;
    level?: $Enums.Level;
    userid: number;
    subjectid: number;
    is_delete?: boolean;
    answer?: Prisma.AnswerUncheckedCreateNestedManyWithoutQuestionInput;
    exam_question?: Prisma.Exam_QuestionUncheckedCreateNestedManyWithoutQuestionInput;
    attempt_answer?: Prisma.Attempt_AnswerUncheckedCreateNestedManyWithoutQuestionInput;
};
export type QuestionCreateOrConnectWithoutChapterInput = {
    where: Prisma.QuestionWhereUniqueInput;
    create: Prisma.XOR<Prisma.QuestionCreateWithoutChapterInput, Prisma.QuestionUncheckedCreateWithoutChapterInput>;
};
export type QuestionCreateManyChapterInputEnvelope = {
    data: Prisma.QuestionCreateManyChapterInput | Prisma.QuestionCreateManyChapterInput[];
    skipDuplicates?: boolean;
};
export type QuestionUpsertWithWhereUniqueWithoutChapterInput = {
    where: Prisma.QuestionWhereUniqueInput;
    update: Prisma.XOR<Prisma.QuestionUpdateWithoutChapterInput, Prisma.QuestionUncheckedUpdateWithoutChapterInput>;
    create: Prisma.XOR<Prisma.QuestionCreateWithoutChapterInput, Prisma.QuestionUncheckedCreateWithoutChapterInput>;
};
export type QuestionUpdateWithWhereUniqueWithoutChapterInput = {
    where: Prisma.QuestionWhereUniqueInput;
    data: Prisma.XOR<Prisma.QuestionUpdateWithoutChapterInput, Prisma.QuestionUncheckedUpdateWithoutChapterInput>;
};
export type QuestionUpdateManyWithWhereWithoutChapterInput = {
    where: Prisma.QuestionScalarWhereInput;
    data: Prisma.XOR<Prisma.QuestionUpdateManyMutationInput, Prisma.QuestionUncheckedUpdateManyWithoutChapterInput>;
};
export type QuestionCreateWithoutAnswerInput = {
    content: string;
    level?: $Enums.Level;
    is_delete?: boolean;
    author: Prisma.UserCreateNestedOneWithoutQuestionInput;
    subject: Prisma.SubjectCreateNestedOneWithoutQuestionInput;
    chapter: Prisma.ChapterCreateNestedOneWithoutQuestionInput;
    exam_question?: Prisma.Exam_QuestionCreateNestedManyWithoutQuestionInput;
    attempt_answer?: Prisma.Attempt_AnswerCreateNestedManyWithoutQuestionInput;
};
export type QuestionUncheckedCreateWithoutAnswerInput = {
    quesid?: number;
    content: string;
    level?: $Enums.Level;
    userid: number;
    subjectid: number;
    chapid: number;
    is_delete?: boolean;
    exam_question?: Prisma.Exam_QuestionUncheckedCreateNestedManyWithoutQuestionInput;
    attempt_answer?: Prisma.Attempt_AnswerUncheckedCreateNestedManyWithoutQuestionInput;
};
export type QuestionCreateOrConnectWithoutAnswerInput = {
    where: Prisma.QuestionWhereUniqueInput;
    create: Prisma.XOR<Prisma.QuestionCreateWithoutAnswerInput, Prisma.QuestionUncheckedCreateWithoutAnswerInput>;
};
export type QuestionUpsertWithoutAnswerInput = {
    update: Prisma.XOR<Prisma.QuestionUpdateWithoutAnswerInput, Prisma.QuestionUncheckedUpdateWithoutAnswerInput>;
    create: Prisma.XOR<Prisma.QuestionCreateWithoutAnswerInput, Prisma.QuestionUncheckedCreateWithoutAnswerInput>;
    where?: Prisma.QuestionWhereInput;
};
export type QuestionUpdateToOneWithWhereWithoutAnswerInput = {
    where?: Prisma.QuestionWhereInput;
    data: Prisma.XOR<Prisma.QuestionUpdateWithoutAnswerInput, Prisma.QuestionUncheckedUpdateWithoutAnswerInput>;
};
export type QuestionUpdateWithoutAnswerInput = {
    content?: Prisma.StringFieldUpdateOperationsInput | string;
    level?: Prisma.EnumLevelFieldUpdateOperationsInput | $Enums.Level;
    is_delete?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    author?: Prisma.UserUpdateOneRequiredWithoutQuestionNestedInput;
    subject?: Prisma.SubjectUpdateOneRequiredWithoutQuestionNestedInput;
    chapter?: Prisma.ChapterUpdateOneRequiredWithoutQuestionNestedInput;
    exam_question?: Prisma.Exam_QuestionUpdateManyWithoutQuestionNestedInput;
    attempt_answer?: Prisma.Attempt_AnswerUpdateManyWithoutQuestionNestedInput;
};
export type QuestionUncheckedUpdateWithoutAnswerInput = {
    quesid?: Prisma.IntFieldUpdateOperationsInput | number;
    content?: Prisma.StringFieldUpdateOperationsInput | string;
    level?: Prisma.EnumLevelFieldUpdateOperationsInput | $Enums.Level;
    userid?: Prisma.IntFieldUpdateOperationsInput | number;
    subjectid?: Prisma.IntFieldUpdateOperationsInput | number;
    chapid?: Prisma.IntFieldUpdateOperationsInput | number;
    is_delete?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    exam_question?: Prisma.Exam_QuestionUncheckedUpdateManyWithoutQuestionNestedInput;
    attempt_answer?: Prisma.Attempt_AnswerUncheckedUpdateManyWithoutQuestionNestedInput;
};
export type QuestionCreateWithoutExam_questionInput = {
    content: string;
    level?: $Enums.Level;
    is_delete?: boolean;
    author: Prisma.UserCreateNestedOneWithoutQuestionInput;
    subject: Prisma.SubjectCreateNestedOneWithoutQuestionInput;
    chapter: Prisma.ChapterCreateNestedOneWithoutQuestionInput;
    answer?: Prisma.AnswerCreateNestedManyWithoutQuestionInput;
    attempt_answer?: Prisma.Attempt_AnswerCreateNestedManyWithoutQuestionInput;
};
export type QuestionUncheckedCreateWithoutExam_questionInput = {
    quesid?: number;
    content: string;
    level?: $Enums.Level;
    userid: number;
    subjectid: number;
    chapid: number;
    is_delete?: boolean;
    answer?: Prisma.AnswerUncheckedCreateNestedManyWithoutQuestionInput;
    attempt_answer?: Prisma.Attempt_AnswerUncheckedCreateNestedManyWithoutQuestionInput;
};
export type QuestionCreateOrConnectWithoutExam_questionInput = {
    where: Prisma.QuestionWhereUniqueInput;
    create: Prisma.XOR<Prisma.QuestionCreateWithoutExam_questionInput, Prisma.QuestionUncheckedCreateWithoutExam_questionInput>;
};
export type QuestionUpsertWithoutExam_questionInput = {
    update: Prisma.XOR<Prisma.QuestionUpdateWithoutExam_questionInput, Prisma.QuestionUncheckedUpdateWithoutExam_questionInput>;
    create: Prisma.XOR<Prisma.QuestionCreateWithoutExam_questionInput, Prisma.QuestionUncheckedCreateWithoutExam_questionInput>;
    where?: Prisma.QuestionWhereInput;
};
export type QuestionUpdateToOneWithWhereWithoutExam_questionInput = {
    where?: Prisma.QuestionWhereInput;
    data: Prisma.XOR<Prisma.QuestionUpdateWithoutExam_questionInput, Prisma.QuestionUncheckedUpdateWithoutExam_questionInput>;
};
export type QuestionUpdateWithoutExam_questionInput = {
    content?: Prisma.StringFieldUpdateOperationsInput | string;
    level?: Prisma.EnumLevelFieldUpdateOperationsInput | $Enums.Level;
    is_delete?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    author?: Prisma.UserUpdateOneRequiredWithoutQuestionNestedInput;
    subject?: Prisma.SubjectUpdateOneRequiredWithoutQuestionNestedInput;
    chapter?: Prisma.ChapterUpdateOneRequiredWithoutQuestionNestedInput;
    answer?: Prisma.AnswerUpdateManyWithoutQuestionNestedInput;
    attempt_answer?: Prisma.Attempt_AnswerUpdateManyWithoutQuestionNestedInput;
};
export type QuestionUncheckedUpdateWithoutExam_questionInput = {
    quesid?: Prisma.IntFieldUpdateOperationsInput | number;
    content?: Prisma.StringFieldUpdateOperationsInput | string;
    level?: Prisma.EnumLevelFieldUpdateOperationsInput | $Enums.Level;
    userid?: Prisma.IntFieldUpdateOperationsInput | number;
    subjectid?: Prisma.IntFieldUpdateOperationsInput | number;
    chapid?: Prisma.IntFieldUpdateOperationsInput | number;
    is_delete?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    answer?: Prisma.AnswerUncheckedUpdateManyWithoutQuestionNestedInput;
    attempt_answer?: Prisma.Attempt_AnswerUncheckedUpdateManyWithoutQuestionNestedInput;
};
export type QuestionCreateWithoutAttempt_answerInput = {
    content: string;
    level?: $Enums.Level;
    is_delete?: boolean;
    author: Prisma.UserCreateNestedOneWithoutQuestionInput;
    subject: Prisma.SubjectCreateNestedOneWithoutQuestionInput;
    chapter: Prisma.ChapterCreateNestedOneWithoutQuestionInput;
    answer?: Prisma.AnswerCreateNestedManyWithoutQuestionInput;
    exam_question?: Prisma.Exam_QuestionCreateNestedManyWithoutQuestionInput;
};
export type QuestionUncheckedCreateWithoutAttempt_answerInput = {
    quesid?: number;
    content: string;
    level?: $Enums.Level;
    userid: number;
    subjectid: number;
    chapid: number;
    is_delete?: boolean;
    answer?: Prisma.AnswerUncheckedCreateNestedManyWithoutQuestionInput;
    exam_question?: Prisma.Exam_QuestionUncheckedCreateNestedManyWithoutQuestionInput;
};
export type QuestionCreateOrConnectWithoutAttempt_answerInput = {
    where: Prisma.QuestionWhereUniqueInput;
    create: Prisma.XOR<Prisma.QuestionCreateWithoutAttempt_answerInput, Prisma.QuestionUncheckedCreateWithoutAttempt_answerInput>;
};
export type QuestionUpsertWithoutAttempt_answerInput = {
    update: Prisma.XOR<Prisma.QuestionUpdateWithoutAttempt_answerInput, Prisma.QuestionUncheckedUpdateWithoutAttempt_answerInput>;
    create: Prisma.XOR<Prisma.QuestionCreateWithoutAttempt_answerInput, Prisma.QuestionUncheckedCreateWithoutAttempt_answerInput>;
    where?: Prisma.QuestionWhereInput;
};
export type QuestionUpdateToOneWithWhereWithoutAttempt_answerInput = {
    where?: Prisma.QuestionWhereInput;
    data: Prisma.XOR<Prisma.QuestionUpdateWithoutAttempt_answerInput, Prisma.QuestionUncheckedUpdateWithoutAttempt_answerInput>;
};
export type QuestionUpdateWithoutAttempt_answerInput = {
    content?: Prisma.StringFieldUpdateOperationsInput | string;
    level?: Prisma.EnumLevelFieldUpdateOperationsInput | $Enums.Level;
    is_delete?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    author?: Prisma.UserUpdateOneRequiredWithoutQuestionNestedInput;
    subject?: Prisma.SubjectUpdateOneRequiredWithoutQuestionNestedInput;
    chapter?: Prisma.ChapterUpdateOneRequiredWithoutQuestionNestedInput;
    answer?: Prisma.AnswerUpdateManyWithoutQuestionNestedInput;
    exam_question?: Prisma.Exam_QuestionUpdateManyWithoutQuestionNestedInput;
};
export type QuestionUncheckedUpdateWithoutAttempt_answerInput = {
    quesid?: Prisma.IntFieldUpdateOperationsInput | number;
    content?: Prisma.StringFieldUpdateOperationsInput | string;
    level?: Prisma.EnumLevelFieldUpdateOperationsInput | $Enums.Level;
    userid?: Prisma.IntFieldUpdateOperationsInput | number;
    subjectid?: Prisma.IntFieldUpdateOperationsInput | number;
    chapid?: Prisma.IntFieldUpdateOperationsInput | number;
    is_delete?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    answer?: Prisma.AnswerUncheckedUpdateManyWithoutQuestionNestedInput;
    exam_question?: Prisma.Exam_QuestionUncheckedUpdateManyWithoutQuestionNestedInput;
};
export type QuestionCreateManyAuthorInput = {
    quesid?: number;
    content: string;
    level?: $Enums.Level;
    subjectid: number;
    chapid: number;
    is_delete?: boolean;
};
export type QuestionUpdateWithoutAuthorInput = {
    content?: Prisma.StringFieldUpdateOperationsInput | string;
    level?: Prisma.EnumLevelFieldUpdateOperationsInput | $Enums.Level;
    is_delete?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    subject?: Prisma.SubjectUpdateOneRequiredWithoutQuestionNestedInput;
    chapter?: Prisma.ChapterUpdateOneRequiredWithoutQuestionNestedInput;
    answer?: Prisma.AnswerUpdateManyWithoutQuestionNestedInput;
    exam_question?: Prisma.Exam_QuestionUpdateManyWithoutQuestionNestedInput;
    attempt_answer?: Prisma.Attempt_AnswerUpdateManyWithoutQuestionNestedInput;
};
export type QuestionUncheckedUpdateWithoutAuthorInput = {
    quesid?: Prisma.IntFieldUpdateOperationsInput | number;
    content?: Prisma.StringFieldUpdateOperationsInput | string;
    level?: Prisma.EnumLevelFieldUpdateOperationsInput | $Enums.Level;
    subjectid?: Prisma.IntFieldUpdateOperationsInput | number;
    chapid?: Prisma.IntFieldUpdateOperationsInput | number;
    is_delete?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    answer?: Prisma.AnswerUncheckedUpdateManyWithoutQuestionNestedInput;
    exam_question?: Prisma.Exam_QuestionUncheckedUpdateManyWithoutQuestionNestedInput;
    attempt_answer?: Prisma.Attempt_AnswerUncheckedUpdateManyWithoutQuestionNestedInput;
};
export type QuestionUncheckedUpdateManyWithoutAuthorInput = {
    quesid?: Prisma.IntFieldUpdateOperationsInput | number;
    content?: Prisma.StringFieldUpdateOperationsInput | string;
    level?: Prisma.EnumLevelFieldUpdateOperationsInput | $Enums.Level;
    subjectid?: Prisma.IntFieldUpdateOperationsInput | number;
    chapid?: Prisma.IntFieldUpdateOperationsInput | number;
    is_delete?: Prisma.BoolFieldUpdateOperationsInput | boolean;
};
export type QuestionCreateManySubjectInput = {
    quesid?: number;
    content: string;
    level?: $Enums.Level;
    userid: number;
    chapid: number;
    is_delete?: boolean;
};
export type QuestionUpdateWithoutSubjectInput = {
    content?: Prisma.StringFieldUpdateOperationsInput | string;
    level?: Prisma.EnumLevelFieldUpdateOperationsInput | $Enums.Level;
    is_delete?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    author?: Prisma.UserUpdateOneRequiredWithoutQuestionNestedInput;
    chapter?: Prisma.ChapterUpdateOneRequiredWithoutQuestionNestedInput;
    answer?: Prisma.AnswerUpdateManyWithoutQuestionNestedInput;
    exam_question?: Prisma.Exam_QuestionUpdateManyWithoutQuestionNestedInput;
    attempt_answer?: Prisma.Attempt_AnswerUpdateManyWithoutQuestionNestedInput;
};
export type QuestionUncheckedUpdateWithoutSubjectInput = {
    quesid?: Prisma.IntFieldUpdateOperationsInput | number;
    content?: Prisma.StringFieldUpdateOperationsInput | string;
    level?: Prisma.EnumLevelFieldUpdateOperationsInput | $Enums.Level;
    userid?: Prisma.IntFieldUpdateOperationsInput | number;
    chapid?: Prisma.IntFieldUpdateOperationsInput | number;
    is_delete?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    answer?: Prisma.AnswerUncheckedUpdateManyWithoutQuestionNestedInput;
    exam_question?: Prisma.Exam_QuestionUncheckedUpdateManyWithoutQuestionNestedInput;
    attempt_answer?: Prisma.Attempt_AnswerUncheckedUpdateManyWithoutQuestionNestedInput;
};
export type QuestionUncheckedUpdateManyWithoutSubjectInput = {
    quesid?: Prisma.IntFieldUpdateOperationsInput | number;
    content?: Prisma.StringFieldUpdateOperationsInput | string;
    level?: Prisma.EnumLevelFieldUpdateOperationsInput | $Enums.Level;
    userid?: Prisma.IntFieldUpdateOperationsInput | number;
    chapid?: Prisma.IntFieldUpdateOperationsInput | number;
    is_delete?: Prisma.BoolFieldUpdateOperationsInput | boolean;
};
export type QuestionCreateManyChapterInput = {
    quesid?: number;
    content: string;
    level?: $Enums.Level;
    userid: number;
    subjectid: number;
    is_delete?: boolean;
};
export type QuestionUpdateWithoutChapterInput = {
    content?: Prisma.StringFieldUpdateOperationsInput | string;
    level?: Prisma.EnumLevelFieldUpdateOperationsInput | $Enums.Level;
    is_delete?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    author?: Prisma.UserUpdateOneRequiredWithoutQuestionNestedInput;
    subject?: Prisma.SubjectUpdateOneRequiredWithoutQuestionNestedInput;
    answer?: Prisma.AnswerUpdateManyWithoutQuestionNestedInput;
    exam_question?: Prisma.Exam_QuestionUpdateManyWithoutQuestionNestedInput;
    attempt_answer?: Prisma.Attempt_AnswerUpdateManyWithoutQuestionNestedInput;
};
export type QuestionUncheckedUpdateWithoutChapterInput = {
    quesid?: Prisma.IntFieldUpdateOperationsInput | number;
    content?: Prisma.StringFieldUpdateOperationsInput | string;
    level?: Prisma.EnumLevelFieldUpdateOperationsInput | $Enums.Level;
    userid?: Prisma.IntFieldUpdateOperationsInput | number;
    subjectid?: Prisma.IntFieldUpdateOperationsInput | number;
    is_delete?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    answer?: Prisma.AnswerUncheckedUpdateManyWithoutQuestionNestedInput;
    exam_question?: Prisma.Exam_QuestionUncheckedUpdateManyWithoutQuestionNestedInput;
    attempt_answer?: Prisma.Attempt_AnswerUncheckedUpdateManyWithoutQuestionNestedInput;
};
export type QuestionUncheckedUpdateManyWithoutChapterInput = {
    quesid?: Prisma.IntFieldUpdateOperationsInput | number;
    content?: Prisma.StringFieldUpdateOperationsInput | string;
    level?: Prisma.EnumLevelFieldUpdateOperationsInput | $Enums.Level;
    userid?: Prisma.IntFieldUpdateOperationsInput | number;
    subjectid?: Prisma.IntFieldUpdateOperationsInput | number;
    is_delete?: Prisma.BoolFieldUpdateOperationsInput | boolean;
};
/**
 * Count Type QuestionCountOutputType
 */
export type QuestionCountOutputType = {
    answer: number;
    exam_question: number;
    attempt_answer: number;
};
export type QuestionCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    answer?: boolean | QuestionCountOutputTypeCountAnswerArgs;
    exam_question?: boolean | QuestionCountOutputTypeCountExam_questionArgs;
    attempt_answer?: boolean | QuestionCountOutputTypeCountAttempt_answerArgs;
};
/**
 * QuestionCountOutputType without action
 */
export type QuestionCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuestionCountOutputType
     */
    select?: Prisma.QuestionCountOutputTypeSelect<ExtArgs> | null;
};
/**
 * QuestionCountOutputType without action
 */
export type QuestionCountOutputTypeCountAnswerArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AnswerWhereInput;
};
/**
 * QuestionCountOutputType without action
 */
export type QuestionCountOutputTypeCountExam_questionArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.Exam_QuestionWhereInput;
};
/**
 * QuestionCountOutputType without action
 */
export type QuestionCountOutputTypeCountAttempt_answerArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.Attempt_AnswerWhereInput;
};
export type QuestionSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    quesid?: boolean;
    content?: boolean;
    level?: boolean;
    userid?: boolean;
    subjectid?: boolean;
    chapid?: boolean;
    is_delete?: boolean;
    author?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    subject?: boolean | Prisma.SubjectDefaultArgs<ExtArgs>;
    chapter?: boolean | Prisma.ChapterDefaultArgs<ExtArgs>;
    answer?: boolean | Prisma.Question$answerArgs<ExtArgs>;
    exam_question?: boolean | Prisma.Question$exam_questionArgs<ExtArgs>;
    attempt_answer?: boolean | Prisma.Question$attempt_answerArgs<ExtArgs>;
    _count?: boolean | Prisma.QuestionCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["question"]>;
export type QuestionSelectScalar = {
    quesid?: boolean;
    content?: boolean;
    level?: boolean;
    userid?: boolean;
    subjectid?: boolean;
    chapid?: boolean;
    is_delete?: boolean;
};
export type QuestionOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"quesid" | "content" | "level" | "userid" | "subjectid" | "chapid" | "is_delete", ExtArgs["result"]["question"]>;
export type QuestionInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    author?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    subject?: boolean | Prisma.SubjectDefaultArgs<ExtArgs>;
    chapter?: boolean | Prisma.ChapterDefaultArgs<ExtArgs>;
    answer?: boolean | Prisma.Question$answerArgs<ExtArgs>;
    exam_question?: boolean | Prisma.Question$exam_questionArgs<ExtArgs>;
    attempt_answer?: boolean | Prisma.Question$attempt_answerArgs<ExtArgs>;
    _count?: boolean | Prisma.QuestionCountOutputTypeDefaultArgs<ExtArgs>;
};
export type $QuestionPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Question";
    objects: {
        author: Prisma.$UserPayload<ExtArgs>;
        subject: Prisma.$SubjectPayload<ExtArgs>;
        chapter: Prisma.$ChapterPayload<ExtArgs>;
        answer: Prisma.$AnswerPayload<ExtArgs>[];
        exam_question: Prisma.$Exam_QuestionPayload<ExtArgs>[];
        attempt_answer: Prisma.$Attempt_AnswerPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        quesid: number;
        content: string;
        level: $Enums.Level;
        userid: number;
        subjectid: number;
        chapid: number;
        is_delete: boolean;
    }, ExtArgs["result"]["question"]>;
    composites: {};
};
export type QuestionGetPayload<S extends boolean | null | undefined | QuestionDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$QuestionPayload, S>;
export type QuestionCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<QuestionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: QuestionCountAggregateInputType | true;
};
export interface QuestionDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Question'];
        meta: {
            name: 'Question';
        };
    };
    /**
     * Find zero or one Question that matches the filter.
     * @param {QuestionFindUniqueArgs} args - Arguments to find a Question
     * @example
     * // Get one Question
     * const question = await prisma.question.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends QuestionFindUniqueArgs>(args: Prisma.SelectSubset<T, QuestionFindUniqueArgs<ExtArgs>>): Prisma.Prisma__QuestionClient<runtime.Types.Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one Question that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {QuestionFindUniqueOrThrowArgs} args - Arguments to find a Question
     * @example
     * // Get one Question
     * const question = await prisma.question.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends QuestionFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, QuestionFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__QuestionClient<runtime.Types.Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Question that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionFindFirstArgs} args - Arguments to find a Question
     * @example
     * // Get one Question
     * const question = await prisma.question.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends QuestionFindFirstArgs>(args?: Prisma.SelectSubset<T, QuestionFindFirstArgs<ExtArgs>>): Prisma.Prisma__QuestionClient<runtime.Types.Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Question that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionFindFirstOrThrowArgs} args - Arguments to find a Question
     * @example
     * // Get one Question
     * const question = await prisma.question.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends QuestionFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, QuestionFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__QuestionClient<runtime.Types.Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more Questions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Questions
     * const questions = await prisma.question.findMany()
     *
     * // Get first 10 Questions
     * const questions = await prisma.question.findMany({ take: 10 })
     *
     * // Only select the `quesid`
     * const questionWithQuesidOnly = await prisma.question.findMany({ select: { quesid: true } })
     *
     */
    findMany<T extends QuestionFindManyArgs>(args?: Prisma.SelectSubset<T, QuestionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a Question.
     * @param {QuestionCreateArgs} args - Arguments to create a Question.
     * @example
     * // Create one Question
     * const Question = await prisma.question.create({
     *   data: {
     *     // ... data to create a Question
     *   }
     * })
     *
     */
    create<T extends QuestionCreateArgs>(args: Prisma.SelectSubset<T, QuestionCreateArgs<ExtArgs>>): Prisma.Prisma__QuestionClient<runtime.Types.Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many Questions.
     * @param {QuestionCreateManyArgs} args - Arguments to create many Questions.
     * @example
     * // Create many Questions
     * const question = await prisma.question.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends QuestionCreateManyArgs>(args?: Prisma.SelectSubset<T, QuestionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Delete a Question.
     * @param {QuestionDeleteArgs} args - Arguments to delete one Question.
     * @example
     * // Delete one Question
     * const Question = await prisma.question.delete({
     *   where: {
     *     // ... filter to delete one Question
     *   }
     * })
     *
     */
    delete<T extends QuestionDeleteArgs>(args: Prisma.SelectSubset<T, QuestionDeleteArgs<ExtArgs>>): Prisma.Prisma__QuestionClient<runtime.Types.Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one Question.
     * @param {QuestionUpdateArgs} args - Arguments to update one Question.
     * @example
     * // Update one Question
     * const question = await prisma.question.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends QuestionUpdateArgs>(args: Prisma.SelectSubset<T, QuestionUpdateArgs<ExtArgs>>): Prisma.Prisma__QuestionClient<runtime.Types.Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more Questions.
     * @param {QuestionDeleteManyArgs} args - Arguments to filter Questions to delete.
     * @example
     * // Delete a few Questions
     * const { count } = await prisma.question.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends QuestionDeleteManyArgs>(args?: Prisma.SelectSubset<T, QuestionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Questions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Questions
     * const question = await prisma.question.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends QuestionUpdateManyArgs>(args: Prisma.SelectSubset<T, QuestionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create or update one Question.
     * @param {QuestionUpsertArgs} args - Arguments to update or create a Question.
     * @example
     * // Update or create a Question
     * const question = await prisma.question.upsert({
     *   create: {
     *     // ... data to create a Question
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Question we want to update
     *   }
     * })
     */
    upsert<T extends QuestionUpsertArgs>(args: Prisma.SelectSubset<T, QuestionUpsertArgs<ExtArgs>>): Prisma.Prisma__QuestionClient<runtime.Types.Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of Questions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionCountArgs} args - Arguments to filter Questions to count.
     * @example
     * // Count the number of Questions
     * const count = await prisma.question.count({
     *   where: {
     *     // ... the filter for the Questions we want to count
     *   }
     * })
    **/
    count<T extends QuestionCountArgs>(args?: Prisma.Subset<T, QuestionCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], QuestionCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a Question.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends QuestionAggregateArgs>(args: Prisma.Subset<T, QuestionAggregateArgs>): Prisma.PrismaPromise<GetQuestionAggregateType<T>>;
    /**
     * Group by Question.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionGroupByArgs} args - Group by arguments.
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
    groupBy<T extends QuestionGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: QuestionGroupByArgs['orderBy'];
    } : {
        orderBy?: QuestionGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, QuestionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetQuestionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the Question model
     */
    readonly fields: QuestionFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for Question.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__QuestionClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    author<T extends Prisma.UserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UserDefaultArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    subject<T extends Prisma.SubjectDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.SubjectDefaultArgs<ExtArgs>>): Prisma.Prisma__SubjectClient<runtime.Types.Result.GetResult<Prisma.$SubjectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    chapter<T extends Prisma.ChapterDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ChapterDefaultArgs<ExtArgs>>): Prisma.Prisma__ChapterClient<runtime.Types.Result.GetResult<Prisma.$ChapterPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    answer<T extends Prisma.Question$answerArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Question$answerArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AnswerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    exam_question<T extends Prisma.Question$exam_questionArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Question$exam_questionArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$Exam_QuestionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    attempt_answer<T extends Prisma.Question$attempt_answerArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Question$attempt_answerArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$Attempt_AnswerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
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
 * Fields of the Question model
 */
export interface QuestionFieldRefs {
    readonly quesid: Prisma.FieldRef<"Question", 'Int'>;
    readonly content: Prisma.FieldRef<"Question", 'String'>;
    readonly level: Prisma.FieldRef<"Question", 'Level'>;
    readonly userid: Prisma.FieldRef<"Question", 'Int'>;
    readonly subjectid: Prisma.FieldRef<"Question", 'Int'>;
    readonly chapid: Prisma.FieldRef<"Question", 'Int'>;
    readonly is_delete: Prisma.FieldRef<"Question", 'Boolean'>;
}
/**
 * Question findUnique
 */
export type QuestionFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: Prisma.QuestionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Question
     */
    omit?: Prisma.QuestionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.QuestionInclude<ExtArgs> | null;
    /**
     * Filter, which Question to fetch.
     */
    where: Prisma.QuestionWhereUniqueInput;
};
/**
 * Question findUniqueOrThrow
 */
export type QuestionFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: Prisma.QuestionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Question
     */
    omit?: Prisma.QuestionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.QuestionInclude<ExtArgs> | null;
    /**
     * Filter, which Question to fetch.
     */
    where: Prisma.QuestionWhereUniqueInput;
};
/**
 * Question findFirst
 */
export type QuestionFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: Prisma.QuestionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Question
     */
    omit?: Prisma.QuestionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.QuestionInclude<ExtArgs> | null;
    /**
     * Filter, which Question to fetch.
     */
    where?: Prisma.QuestionWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Questions to fetch.
     */
    orderBy?: Prisma.QuestionOrderByWithRelationInput | Prisma.QuestionOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Questions.
     */
    cursor?: Prisma.QuestionWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Questions from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Questions.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Questions.
     */
    distinct?: Prisma.QuestionScalarFieldEnum | Prisma.QuestionScalarFieldEnum[];
};
/**
 * Question findFirstOrThrow
 */
export type QuestionFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: Prisma.QuestionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Question
     */
    omit?: Prisma.QuestionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.QuestionInclude<ExtArgs> | null;
    /**
     * Filter, which Question to fetch.
     */
    where?: Prisma.QuestionWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Questions to fetch.
     */
    orderBy?: Prisma.QuestionOrderByWithRelationInput | Prisma.QuestionOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Questions.
     */
    cursor?: Prisma.QuestionWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Questions from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Questions.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Questions.
     */
    distinct?: Prisma.QuestionScalarFieldEnum | Prisma.QuestionScalarFieldEnum[];
};
/**
 * Question findMany
 */
export type QuestionFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: Prisma.QuestionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Question
     */
    omit?: Prisma.QuestionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.QuestionInclude<ExtArgs> | null;
    /**
     * Filter, which Questions to fetch.
     */
    where?: Prisma.QuestionWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Questions to fetch.
     */
    orderBy?: Prisma.QuestionOrderByWithRelationInput | Prisma.QuestionOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Questions.
     */
    cursor?: Prisma.QuestionWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Questions from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Questions.
     */
    skip?: number;
    distinct?: Prisma.QuestionScalarFieldEnum | Prisma.QuestionScalarFieldEnum[];
};
/**
 * Question create
 */
export type QuestionCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: Prisma.QuestionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Question
     */
    omit?: Prisma.QuestionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.QuestionInclude<ExtArgs> | null;
    /**
     * The data needed to create a Question.
     */
    data: Prisma.XOR<Prisma.QuestionCreateInput, Prisma.QuestionUncheckedCreateInput>;
};
/**
 * Question createMany
 */
export type QuestionCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many Questions.
     */
    data: Prisma.QuestionCreateManyInput | Prisma.QuestionCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * Question update
 */
export type QuestionUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: Prisma.QuestionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Question
     */
    omit?: Prisma.QuestionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.QuestionInclude<ExtArgs> | null;
    /**
     * The data needed to update a Question.
     */
    data: Prisma.XOR<Prisma.QuestionUpdateInput, Prisma.QuestionUncheckedUpdateInput>;
    /**
     * Choose, which Question to update.
     */
    where: Prisma.QuestionWhereUniqueInput;
};
/**
 * Question updateMany
 */
export type QuestionUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update Questions.
     */
    data: Prisma.XOR<Prisma.QuestionUpdateManyMutationInput, Prisma.QuestionUncheckedUpdateManyInput>;
    /**
     * Filter which Questions to update
     */
    where?: Prisma.QuestionWhereInput;
    /**
     * Limit how many Questions to update.
     */
    limit?: number;
};
/**
 * Question upsert
 */
export type QuestionUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: Prisma.QuestionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Question
     */
    omit?: Prisma.QuestionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.QuestionInclude<ExtArgs> | null;
    /**
     * The filter to search for the Question to update in case it exists.
     */
    where: Prisma.QuestionWhereUniqueInput;
    /**
     * In case the Question found by the `where` argument doesn't exist, create a new Question with this data.
     */
    create: Prisma.XOR<Prisma.QuestionCreateInput, Prisma.QuestionUncheckedCreateInput>;
    /**
     * In case the Question was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.QuestionUpdateInput, Prisma.QuestionUncheckedUpdateInput>;
};
/**
 * Question delete
 */
export type QuestionDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: Prisma.QuestionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Question
     */
    omit?: Prisma.QuestionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.QuestionInclude<ExtArgs> | null;
    /**
     * Filter which Question to delete.
     */
    where: Prisma.QuestionWhereUniqueInput;
};
/**
 * Question deleteMany
 */
export type QuestionDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which Questions to delete
     */
    where?: Prisma.QuestionWhereInput;
    /**
     * Limit how many Questions to delete.
     */
    limit?: number;
};
/**
 * Question.answer
 */
export type Question$answerArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Answer
     */
    select?: Prisma.AnswerSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Answer
     */
    omit?: Prisma.AnswerOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.AnswerInclude<ExtArgs> | null;
    where?: Prisma.AnswerWhereInput;
    orderBy?: Prisma.AnswerOrderByWithRelationInput | Prisma.AnswerOrderByWithRelationInput[];
    cursor?: Prisma.AnswerWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.AnswerScalarFieldEnum | Prisma.AnswerScalarFieldEnum[];
};
/**
 * Question.exam_question
 */
export type Question$exam_questionArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exam_Question
     */
    select?: Prisma.Exam_QuestionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Exam_Question
     */
    omit?: Prisma.Exam_QuestionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.Exam_QuestionInclude<ExtArgs> | null;
    where?: Prisma.Exam_QuestionWhereInput;
    orderBy?: Prisma.Exam_QuestionOrderByWithRelationInput | Prisma.Exam_QuestionOrderByWithRelationInput[];
    cursor?: Prisma.Exam_QuestionWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Exam_QuestionScalarFieldEnum | Prisma.Exam_QuestionScalarFieldEnum[];
};
/**
 * Question.attempt_answer
 */
export type Question$attempt_answerArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attempt_Answer
     */
    select?: Prisma.Attempt_AnswerSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Attempt_Answer
     */
    omit?: Prisma.Attempt_AnswerOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.Attempt_AnswerInclude<ExtArgs> | null;
    where?: Prisma.Attempt_AnswerWhereInput;
    orderBy?: Prisma.Attempt_AnswerOrderByWithRelationInput | Prisma.Attempt_AnswerOrderByWithRelationInput[];
    cursor?: Prisma.Attempt_AnswerWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Attempt_AnswerScalarFieldEnum | Prisma.Attempt_AnswerScalarFieldEnum[];
};
/**
 * Question without action
 */
export type QuestionDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: Prisma.QuestionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Question
     */
    omit?: Prisma.QuestionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.QuestionInclude<ExtArgs> | null;
};
export {};
//# sourceMappingURL=Question.d.ts.map