import type * as runtime from "@prisma/client/runtime/library";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model Exam
 *
 */
export type ExamModel = runtime.Types.Result.DefaultSelection<Prisma.$ExamPayload>;
export type AggregateExam = {
    _count: ExamCountAggregateOutputType | null;
    _avg: ExamAvgAggregateOutputType | null;
    _sum: ExamSumAggregateOutputType | null;
    _min: ExamMinAggregateOutputType | null;
    _max: ExamMaxAggregateOutputType | null;
};
export type ExamAvgAggregateOutputType = {
    examid: number | null;
    subjectid: number | null;
    chapid: number | null;
    userid: number | null;
};
export type ExamSumAggregateOutputType = {
    examid: number | null;
    subjectid: number | null;
    chapid: number | null;
    userid: number | null;
};
export type ExamMinAggregateOutputType = {
    examid: number | null;
    examname: string | null;
    subjectid: number | null;
    chapid: number | null;
    userid: number | null;
    start_time: Date | null;
    end_time: Date | null;
    is_delete: boolean | null;
};
export type ExamMaxAggregateOutputType = {
    examid: number | null;
    examname: string | null;
    subjectid: number | null;
    chapid: number | null;
    userid: number | null;
    start_time: Date | null;
    end_time: Date | null;
    is_delete: boolean | null;
};
export type ExamCountAggregateOutputType = {
    examid: number;
    examname: number;
    subjectid: number;
    chapid: number;
    userid: number;
    start_time: number;
    end_time: number;
    is_delete: number;
    _all: number;
};
export type ExamAvgAggregateInputType = {
    examid?: true;
    subjectid?: true;
    chapid?: true;
    userid?: true;
};
export type ExamSumAggregateInputType = {
    examid?: true;
    subjectid?: true;
    chapid?: true;
    userid?: true;
};
export type ExamMinAggregateInputType = {
    examid?: true;
    examname?: true;
    subjectid?: true;
    chapid?: true;
    userid?: true;
    start_time?: true;
    end_time?: true;
    is_delete?: true;
};
export type ExamMaxAggregateInputType = {
    examid?: true;
    examname?: true;
    subjectid?: true;
    chapid?: true;
    userid?: true;
    start_time?: true;
    end_time?: true;
    is_delete?: true;
};
export type ExamCountAggregateInputType = {
    examid?: true;
    examname?: true;
    subjectid?: true;
    chapid?: true;
    userid?: true;
    start_time?: true;
    end_time?: true;
    is_delete?: true;
    _all?: true;
};
export type ExamAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which Exam to aggregate.
     */
    where?: Prisma.ExamWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Exams to fetch.
     */
    orderBy?: Prisma.ExamOrderByWithRelationInput | Prisma.ExamOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.ExamWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Exams from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Exams.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Exams
    **/
    _count?: true | ExamCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: ExamAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: ExamSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: ExamMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: ExamMaxAggregateInputType;
};
export type GetExamAggregateType<T extends ExamAggregateArgs> = {
    [P in keyof T & keyof AggregateExam]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateExam[P]> : Prisma.GetScalarType<T[P], AggregateExam[P]>;
};
export type ExamGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ExamWhereInput;
    orderBy?: Prisma.ExamOrderByWithAggregationInput | Prisma.ExamOrderByWithAggregationInput[];
    by: Prisma.ExamScalarFieldEnum[] | Prisma.ExamScalarFieldEnum;
    having?: Prisma.ExamScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ExamCountAggregateInputType | true;
    _avg?: ExamAvgAggregateInputType;
    _sum?: ExamSumAggregateInputType;
    _min?: ExamMinAggregateInputType;
    _max?: ExamMaxAggregateInputType;
};
export type ExamGroupByOutputType = {
    examid: number;
    examname: string;
    subjectid: number;
    chapid: number;
    userid: number;
    start_time: Date;
    end_time: Date;
    is_delete: boolean;
    _count: ExamCountAggregateOutputType | null;
    _avg: ExamAvgAggregateOutputType | null;
    _sum: ExamSumAggregateOutputType | null;
    _min: ExamMinAggregateOutputType | null;
    _max: ExamMaxAggregateOutputType | null;
};
type GetExamGroupByPayload<T extends ExamGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<ExamGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof ExamGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], ExamGroupByOutputType[P]> : Prisma.GetScalarType<T[P], ExamGroupByOutputType[P]>;
}>>;
export type ExamWhereInput = {
    AND?: Prisma.ExamWhereInput | Prisma.ExamWhereInput[];
    OR?: Prisma.ExamWhereInput[];
    NOT?: Prisma.ExamWhereInput | Prisma.ExamWhereInput[];
    examid?: Prisma.IntFilter<"Exam"> | number;
    examname?: Prisma.StringFilter<"Exam"> | string;
    subjectid?: Prisma.IntFilter<"Exam"> | number;
    chapid?: Prisma.IntFilter<"Exam"> | number;
    userid?: Prisma.IntFilter<"Exam"> | number;
    start_time?: Prisma.DateTimeFilter<"Exam"> | Date | string;
    end_time?: Prisma.DateTimeFilter<"Exam"> | Date | string;
    is_delete?: Prisma.BoolFilter<"Exam"> | boolean;
    subject?: Prisma.XOR<Prisma.SubjectScalarRelationFilter, Prisma.SubjectWhereInput>;
    chapter?: Prisma.XOR<Prisma.ChapterScalarRelationFilter, Prisma.ChapterWhereInput>;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    exam_question?: Prisma.Exam_QuestionListRelationFilter;
    exam_attempt?: Prisma.Exam_AttemptListRelationFilter;
};
export type ExamOrderByWithRelationInput = {
    examid?: Prisma.SortOrder;
    examname?: Prisma.SortOrder;
    subjectid?: Prisma.SortOrder;
    chapid?: Prisma.SortOrder;
    userid?: Prisma.SortOrder;
    start_time?: Prisma.SortOrder;
    end_time?: Prisma.SortOrder;
    is_delete?: Prisma.SortOrder;
    subject?: Prisma.SubjectOrderByWithRelationInput;
    chapter?: Prisma.ChapterOrderByWithRelationInput;
    user?: Prisma.UserOrderByWithRelationInput;
    exam_question?: Prisma.Exam_QuestionOrderByRelationAggregateInput;
    exam_attempt?: Prisma.Exam_AttemptOrderByRelationAggregateInput;
    _relevance?: Prisma.ExamOrderByRelevanceInput;
};
export type ExamWhereUniqueInput = Prisma.AtLeast<{
    examid?: number;
    AND?: Prisma.ExamWhereInput | Prisma.ExamWhereInput[];
    OR?: Prisma.ExamWhereInput[];
    NOT?: Prisma.ExamWhereInput | Prisma.ExamWhereInput[];
    examname?: Prisma.StringFilter<"Exam"> | string;
    subjectid?: Prisma.IntFilter<"Exam"> | number;
    chapid?: Prisma.IntFilter<"Exam"> | number;
    userid?: Prisma.IntFilter<"Exam"> | number;
    start_time?: Prisma.DateTimeFilter<"Exam"> | Date | string;
    end_time?: Prisma.DateTimeFilter<"Exam"> | Date | string;
    is_delete?: Prisma.BoolFilter<"Exam"> | boolean;
    subject?: Prisma.XOR<Prisma.SubjectScalarRelationFilter, Prisma.SubjectWhereInput>;
    chapter?: Prisma.XOR<Prisma.ChapterScalarRelationFilter, Prisma.ChapterWhereInput>;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    exam_question?: Prisma.Exam_QuestionListRelationFilter;
    exam_attempt?: Prisma.Exam_AttemptListRelationFilter;
}, "examid">;
export type ExamOrderByWithAggregationInput = {
    examid?: Prisma.SortOrder;
    examname?: Prisma.SortOrder;
    subjectid?: Prisma.SortOrder;
    chapid?: Prisma.SortOrder;
    userid?: Prisma.SortOrder;
    start_time?: Prisma.SortOrder;
    end_time?: Prisma.SortOrder;
    is_delete?: Prisma.SortOrder;
    _count?: Prisma.ExamCountOrderByAggregateInput;
    _avg?: Prisma.ExamAvgOrderByAggregateInput;
    _max?: Prisma.ExamMaxOrderByAggregateInput;
    _min?: Prisma.ExamMinOrderByAggregateInput;
    _sum?: Prisma.ExamSumOrderByAggregateInput;
};
export type ExamScalarWhereWithAggregatesInput = {
    AND?: Prisma.ExamScalarWhereWithAggregatesInput | Prisma.ExamScalarWhereWithAggregatesInput[];
    OR?: Prisma.ExamScalarWhereWithAggregatesInput[];
    NOT?: Prisma.ExamScalarWhereWithAggregatesInput | Prisma.ExamScalarWhereWithAggregatesInput[];
    examid?: Prisma.IntWithAggregatesFilter<"Exam"> | number;
    examname?: Prisma.StringWithAggregatesFilter<"Exam"> | string;
    subjectid?: Prisma.IntWithAggregatesFilter<"Exam"> | number;
    chapid?: Prisma.IntWithAggregatesFilter<"Exam"> | number;
    userid?: Prisma.IntWithAggregatesFilter<"Exam"> | number;
    start_time?: Prisma.DateTimeWithAggregatesFilter<"Exam"> | Date | string;
    end_time?: Prisma.DateTimeWithAggregatesFilter<"Exam"> | Date | string;
    is_delete?: Prisma.BoolWithAggregatesFilter<"Exam"> | boolean;
};
export type ExamCreateInput = {
    examname: string;
    start_time: Date | string;
    end_time: Date | string;
    is_delete?: boolean;
    subject: Prisma.SubjectCreateNestedOneWithoutExamInput;
    chapter: Prisma.ChapterCreateNestedOneWithoutExamInput;
    user: Prisma.UserCreateNestedOneWithoutExamInput;
    exam_question?: Prisma.Exam_QuestionCreateNestedManyWithoutExamInput;
    exam_attempt?: Prisma.Exam_AttemptCreateNestedManyWithoutExamInput;
};
export type ExamUncheckedCreateInput = {
    examid?: number;
    examname: string;
    subjectid: number;
    chapid: number;
    userid: number;
    start_time: Date | string;
    end_time: Date | string;
    is_delete?: boolean;
    exam_question?: Prisma.Exam_QuestionUncheckedCreateNestedManyWithoutExamInput;
    exam_attempt?: Prisma.Exam_AttemptUncheckedCreateNestedManyWithoutExamInput;
};
export type ExamUpdateInput = {
    examname?: Prisma.StringFieldUpdateOperationsInput | string;
    start_time?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    end_time?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    is_delete?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    subject?: Prisma.SubjectUpdateOneRequiredWithoutExamNestedInput;
    chapter?: Prisma.ChapterUpdateOneRequiredWithoutExamNestedInput;
    user?: Prisma.UserUpdateOneRequiredWithoutExamNestedInput;
    exam_question?: Prisma.Exam_QuestionUpdateManyWithoutExamNestedInput;
    exam_attempt?: Prisma.Exam_AttemptUpdateManyWithoutExamNestedInput;
};
export type ExamUncheckedUpdateInput = {
    examid?: Prisma.IntFieldUpdateOperationsInput | number;
    examname?: Prisma.StringFieldUpdateOperationsInput | string;
    subjectid?: Prisma.IntFieldUpdateOperationsInput | number;
    chapid?: Prisma.IntFieldUpdateOperationsInput | number;
    userid?: Prisma.IntFieldUpdateOperationsInput | number;
    start_time?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    end_time?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    is_delete?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    exam_question?: Prisma.Exam_QuestionUncheckedUpdateManyWithoutExamNestedInput;
    exam_attempt?: Prisma.Exam_AttemptUncheckedUpdateManyWithoutExamNestedInput;
};
export type ExamCreateManyInput = {
    examid?: number;
    examname: string;
    subjectid: number;
    chapid: number;
    userid: number;
    start_time: Date | string;
    end_time: Date | string;
    is_delete?: boolean;
};
export type ExamUpdateManyMutationInput = {
    examname?: Prisma.StringFieldUpdateOperationsInput | string;
    start_time?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    end_time?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    is_delete?: Prisma.BoolFieldUpdateOperationsInput | boolean;
};
export type ExamUncheckedUpdateManyInput = {
    examid?: Prisma.IntFieldUpdateOperationsInput | number;
    examname?: Prisma.StringFieldUpdateOperationsInput | string;
    subjectid?: Prisma.IntFieldUpdateOperationsInput | number;
    chapid?: Prisma.IntFieldUpdateOperationsInput | number;
    userid?: Prisma.IntFieldUpdateOperationsInput | number;
    start_time?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    end_time?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    is_delete?: Prisma.BoolFieldUpdateOperationsInput | boolean;
};
export type ExamListRelationFilter = {
    every?: Prisma.ExamWhereInput;
    some?: Prisma.ExamWhereInput;
    none?: Prisma.ExamWhereInput;
};
export type ExamOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type ExamOrderByRelevanceInput = {
    fields: Prisma.ExamOrderByRelevanceFieldEnum | Prisma.ExamOrderByRelevanceFieldEnum[];
    sort: Prisma.SortOrder;
    search: string;
};
export type ExamCountOrderByAggregateInput = {
    examid?: Prisma.SortOrder;
    examname?: Prisma.SortOrder;
    subjectid?: Prisma.SortOrder;
    chapid?: Prisma.SortOrder;
    userid?: Prisma.SortOrder;
    start_time?: Prisma.SortOrder;
    end_time?: Prisma.SortOrder;
    is_delete?: Prisma.SortOrder;
};
export type ExamAvgOrderByAggregateInput = {
    examid?: Prisma.SortOrder;
    subjectid?: Prisma.SortOrder;
    chapid?: Prisma.SortOrder;
    userid?: Prisma.SortOrder;
};
export type ExamMaxOrderByAggregateInput = {
    examid?: Prisma.SortOrder;
    examname?: Prisma.SortOrder;
    subjectid?: Prisma.SortOrder;
    chapid?: Prisma.SortOrder;
    userid?: Prisma.SortOrder;
    start_time?: Prisma.SortOrder;
    end_time?: Prisma.SortOrder;
    is_delete?: Prisma.SortOrder;
};
export type ExamMinOrderByAggregateInput = {
    examid?: Prisma.SortOrder;
    examname?: Prisma.SortOrder;
    subjectid?: Prisma.SortOrder;
    chapid?: Prisma.SortOrder;
    userid?: Prisma.SortOrder;
    start_time?: Prisma.SortOrder;
    end_time?: Prisma.SortOrder;
    is_delete?: Prisma.SortOrder;
};
export type ExamSumOrderByAggregateInput = {
    examid?: Prisma.SortOrder;
    subjectid?: Prisma.SortOrder;
    chapid?: Prisma.SortOrder;
    userid?: Prisma.SortOrder;
};
export type ExamScalarRelationFilter = {
    is?: Prisma.ExamWhereInput;
    isNot?: Prisma.ExamWhereInput;
};
export type ExamCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.ExamCreateWithoutUserInput, Prisma.ExamUncheckedCreateWithoutUserInput> | Prisma.ExamCreateWithoutUserInput[] | Prisma.ExamUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.ExamCreateOrConnectWithoutUserInput | Prisma.ExamCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.ExamCreateManyUserInputEnvelope;
    connect?: Prisma.ExamWhereUniqueInput | Prisma.ExamWhereUniqueInput[];
};
export type ExamUncheckedCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.ExamCreateWithoutUserInput, Prisma.ExamUncheckedCreateWithoutUserInput> | Prisma.ExamCreateWithoutUserInput[] | Prisma.ExamUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.ExamCreateOrConnectWithoutUserInput | Prisma.ExamCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.ExamCreateManyUserInputEnvelope;
    connect?: Prisma.ExamWhereUniqueInput | Prisma.ExamWhereUniqueInput[];
};
export type ExamUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.ExamCreateWithoutUserInput, Prisma.ExamUncheckedCreateWithoutUserInput> | Prisma.ExamCreateWithoutUserInput[] | Prisma.ExamUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.ExamCreateOrConnectWithoutUserInput | Prisma.ExamCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.ExamUpsertWithWhereUniqueWithoutUserInput | Prisma.ExamUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.ExamCreateManyUserInputEnvelope;
    set?: Prisma.ExamWhereUniqueInput | Prisma.ExamWhereUniqueInput[];
    disconnect?: Prisma.ExamWhereUniqueInput | Prisma.ExamWhereUniqueInput[];
    delete?: Prisma.ExamWhereUniqueInput | Prisma.ExamWhereUniqueInput[];
    connect?: Prisma.ExamWhereUniqueInput | Prisma.ExamWhereUniqueInput[];
    update?: Prisma.ExamUpdateWithWhereUniqueWithoutUserInput | Prisma.ExamUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.ExamUpdateManyWithWhereWithoutUserInput | Prisma.ExamUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.ExamScalarWhereInput | Prisma.ExamScalarWhereInput[];
};
export type ExamUncheckedUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.ExamCreateWithoutUserInput, Prisma.ExamUncheckedCreateWithoutUserInput> | Prisma.ExamCreateWithoutUserInput[] | Prisma.ExamUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.ExamCreateOrConnectWithoutUserInput | Prisma.ExamCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.ExamUpsertWithWhereUniqueWithoutUserInput | Prisma.ExamUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.ExamCreateManyUserInputEnvelope;
    set?: Prisma.ExamWhereUniqueInput | Prisma.ExamWhereUniqueInput[];
    disconnect?: Prisma.ExamWhereUniqueInput | Prisma.ExamWhereUniqueInput[];
    delete?: Prisma.ExamWhereUniqueInput | Prisma.ExamWhereUniqueInput[];
    connect?: Prisma.ExamWhereUniqueInput | Prisma.ExamWhereUniqueInput[];
    update?: Prisma.ExamUpdateWithWhereUniqueWithoutUserInput | Prisma.ExamUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.ExamUpdateManyWithWhereWithoutUserInput | Prisma.ExamUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.ExamScalarWhereInput | Prisma.ExamScalarWhereInput[];
};
export type ExamCreateNestedManyWithoutSubjectInput = {
    create?: Prisma.XOR<Prisma.ExamCreateWithoutSubjectInput, Prisma.ExamUncheckedCreateWithoutSubjectInput> | Prisma.ExamCreateWithoutSubjectInput[] | Prisma.ExamUncheckedCreateWithoutSubjectInput[];
    connectOrCreate?: Prisma.ExamCreateOrConnectWithoutSubjectInput | Prisma.ExamCreateOrConnectWithoutSubjectInput[];
    createMany?: Prisma.ExamCreateManySubjectInputEnvelope;
    connect?: Prisma.ExamWhereUniqueInput | Prisma.ExamWhereUniqueInput[];
};
export type ExamUncheckedCreateNestedManyWithoutSubjectInput = {
    create?: Prisma.XOR<Prisma.ExamCreateWithoutSubjectInput, Prisma.ExamUncheckedCreateWithoutSubjectInput> | Prisma.ExamCreateWithoutSubjectInput[] | Prisma.ExamUncheckedCreateWithoutSubjectInput[];
    connectOrCreate?: Prisma.ExamCreateOrConnectWithoutSubjectInput | Prisma.ExamCreateOrConnectWithoutSubjectInput[];
    createMany?: Prisma.ExamCreateManySubjectInputEnvelope;
    connect?: Prisma.ExamWhereUniqueInput | Prisma.ExamWhereUniqueInput[];
};
export type ExamUpdateManyWithoutSubjectNestedInput = {
    create?: Prisma.XOR<Prisma.ExamCreateWithoutSubjectInput, Prisma.ExamUncheckedCreateWithoutSubjectInput> | Prisma.ExamCreateWithoutSubjectInput[] | Prisma.ExamUncheckedCreateWithoutSubjectInput[];
    connectOrCreate?: Prisma.ExamCreateOrConnectWithoutSubjectInput | Prisma.ExamCreateOrConnectWithoutSubjectInput[];
    upsert?: Prisma.ExamUpsertWithWhereUniqueWithoutSubjectInput | Prisma.ExamUpsertWithWhereUniqueWithoutSubjectInput[];
    createMany?: Prisma.ExamCreateManySubjectInputEnvelope;
    set?: Prisma.ExamWhereUniqueInput | Prisma.ExamWhereUniqueInput[];
    disconnect?: Prisma.ExamWhereUniqueInput | Prisma.ExamWhereUniqueInput[];
    delete?: Prisma.ExamWhereUniqueInput | Prisma.ExamWhereUniqueInput[];
    connect?: Prisma.ExamWhereUniqueInput | Prisma.ExamWhereUniqueInput[];
    update?: Prisma.ExamUpdateWithWhereUniqueWithoutSubjectInput | Prisma.ExamUpdateWithWhereUniqueWithoutSubjectInput[];
    updateMany?: Prisma.ExamUpdateManyWithWhereWithoutSubjectInput | Prisma.ExamUpdateManyWithWhereWithoutSubjectInput[];
    deleteMany?: Prisma.ExamScalarWhereInput | Prisma.ExamScalarWhereInput[];
};
export type ExamUncheckedUpdateManyWithoutSubjectNestedInput = {
    create?: Prisma.XOR<Prisma.ExamCreateWithoutSubjectInput, Prisma.ExamUncheckedCreateWithoutSubjectInput> | Prisma.ExamCreateWithoutSubjectInput[] | Prisma.ExamUncheckedCreateWithoutSubjectInput[];
    connectOrCreate?: Prisma.ExamCreateOrConnectWithoutSubjectInput | Prisma.ExamCreateOrConnectWithoutSubjectInput[];
    upsert?: Prisma.ExamUpsertWithWhereUniqueWithoutSubjectInput | Prisma.ExamUpsertWithWhereUniqueWithoutSubjectInput[];
    createMany?: Prisma.ExamCreateManySubjectInputEnvelope;
    set?: Prisma.ExamWhereUniqueInput | Prisma.ExamWhereUniqueInput[];
    disconnect?: Prisma.ExamWhereUniqueInput | Prisma.ExamWhereUniqueInput[];
    delete?: Prisma.ExamWhereUniqueInput | Prisma.ExamWhereUniqueInput[];
    connect?: Prisma.ExamWhereUniqueInput | Prisma.ExamWhereUniqueInput[];
    update?: Prisma.ExamUpdateWithWhereUniqueWithoutSubjectInput | Prisma.ExamUpdateWithWhereUniqueWithoutSubjectInput[];
    updateMany?: Prisma.ExamUpdateManyWithWhereWithoutSubjectInput | Prisma.ExamUpdateManyWithWhereWithoutSubjectInput[];
    deleteMany?: Prisma.ExamScalarWhereInput | Prisma.ExamScalarWhereInput[];
};
export type ExamCreateNestedManyWithoutChapterInput = {
    create?: Prisma.XOR<Prisma.ExamCreateWithoutChapterInput, Prisma.ExamUncheckedCreateWithoutChapterInput> | Prisma.ExamCreateWithoutChapterInput[] | Prisma.ExamUncheckedCreateWithoutChapterInput[];
    connectOrCreate?: Prisma.ExamCreateOrConnectWithoutChapterInput | Prisma.ExamCreateOrConnectWithoutChapterInput[];
    createMany?: Prisma.ExamCreateManyChapterInputEnvelope;
    connect?: Prisma.ExamWhereUniqueInput | Prisma.ExamWhereUniqueInput[];
};
export type ExamUncheckedCreateNestedManyWithoutChapterInput = {
    create?: Prisma.XOR<Prisma.ExamCreateWithoutChapterInput, Prisma.ExamUncheckedCreateWithoutChapterInput> | Prisma.ExamCreateWithoutChapterInput[] | Prisma.ExamUncheckedCreateWithoutChapterInput[];
    connectOrCreate?: Prisma.ExamCreateOrConnectWithoutChapterInput | Prisma.ExamCreateOrConnectWithoutChapterInput[];
    createMany?: Prisma.ExamCreateManyChapterInputEnvelope;
    connect?: Prisma.ExamWhereUniqueInput | Prisma.ExamWhereUniqueInput[];
};
export type ExamUpdateManyWithoutChapterNestedInput = {
    create?: Prisma.XOR<Prisma.ExamCreateWithoutChapterInput, Prisma.ExamUncheckedCreateWithoutChapterInput> | Prisma.ExamCreateWithoutChapterInput[] | Prisma.ExamUncheckedCreateWithoutChapterInput[];
    connectOrCreate?: Prisma.ExamCreateOrConnectWithoutChapterInput | Prisma.ExamCreateOrConnectWithoutChapterInput[];
    upsert?: Prisma.ExamUpsertWithWhereUniqueWithoutChapterInput | Prisma.ExamUpsertWithWhereUniqueWithoutChapterInput[];
    createMany?: Prisma.ExamCreateManyChapterInputEnvelope;
    set?: Prisma.ExamWhereUniqueInput | Prisma.ExamWhereUniqueInput[];
    disconnect?: Prisma.ExamWhereUniqueInput | Prisma.ExamWhereUniqueInput[];
    delete?: Prisma.ExamWhereUniqueInput | Prisma.ExamWhereUniqueInput[];
    connect?: Prisma.ExamWhereUniqueInput | Prisma.ExamWhereUniqueInput[];
    update?: Prisma.ExamUpdateWithWhereUniqueWithoutChapterInput | Prisma.ExamUpdateWithWhereUniqueWithoutChapterInput[];
    updateMany?: Prisma.ExamUpdateManyWithWhereWithoutChapterInput | Prisma.ExamUpdateManyWithWhereWithoutChapterInput[];
    deleteMany?: Prisma.ExamScalarWhereInput | Prisma.ExamScalarWhereInput[];
};
export type ExamUncheckedUpdateManyWithoutChapterNestedInput = {
    create?: Prisma.XOR<Prisma.ExamCreateWithoutChapterInput, Prisma.ExamUncheckedCreateWithoutChapterInput> | Prisma.ExamCreateWithoutChapterInput[] | Prisma.ExamUncheckedCreateWithoutChapterInput[];
    connectOrCreate?: Prisma.ExamCreateOrConnectWithoutChapterInput | Prisma.ExamCreateOrConnectWithoutChapterInput[];
    upsert?: Prisma.ExamUpsertWithWhereUniqueWithoutChapterInput | Prisma.ExamUpsertWithWhereUniqueWithoutChapterInput[];
    createMany?: Prisma.ExamCreateManyChapterInputEnvelope;
    set?: Prisma.ExamWhereUniqueInput | Prisma.ExamWhereUniqueInput[];
    disconnect?: Prisma.ExamWhereUniqueInput | Prisma.ExamWhereUniqueInput[];
    delete?: Prisma.ExamWhereUniqueInput | Prisma.ExamWhereUniqueInput[];
    connect?: Prisma.ExamWhereUniqueInput | Prisma.ExamWhereUniqueInput[];
    update?: Prisma.ExamUpdateWithWhereUniqueWithoutChapterInput | Prisma.ExamUpdateWithWhereUniqueWithoutChapterInput[];
    updateMany?: Prisma.ExamUpdateManyWithWhereWithoutChapterInput | Prisma.ExamUpdateManyWithWhereWithoutChapterInput[];
    deleteMany?: Prisma.ExamScalarWhereInput | Prisma.ExamScalarWhereInput[];
};
export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string;
};
export type ExamCreateNestedOneWithoutExam_questionInput = {
    create?: Prisma.XOR<Prisma.ExamCreateWithoutExam_questionInput, Prisma.ExamUncheckedCreateWithoutExam_questionInput>;
    connectOrCreate?: Prisma.ExamCreateOrConnectWithoutExam_questionInput;
    connect?: Prisma.ExamWhereUniqueInput;
};
export type ExamUpdateOneRequiredWithoutExam_questionNestedInput = {
    create?: Prisma.XOR<Prisma.ExamCreateWithoutExam_questionInput, Prisma.ExamUncheckedCreateWithoutExam_questionInput>;
    connectOrCreate?: Prisma.ExamCreateOrConnectWithoutExam_questionInput;
    upsert?: Prisma.ExamUpsertWithoutExam_questionInput;
    connect?: Prisma.ExamWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.ExamUpdateToOneWithWhereWithoutExam_questionInput, Prisma.ExamUpdateWithoutExam_questionInput>, Prisma.ExamUncheckedUpdateWithoutExam_questionInput>;
};
export type ExamCreateNestedOneWithoutExam_attemptInput = {
    create?: Prisma.XOR<Prisma.ExamCreateWithoutExam_attemptInput, Prisma.ExamUncheckedCreateWithoutExam_attemptInput>;
    connectOrCreate?: Prisma.ExamCreateOrConnectWithoutExam_attemptInput;
    connect?: Prisma.ExamWhereUniqueInput;
};
export type ExamUpdateOneRequiredWithoutExam_attemptNestedInput = {
    create?: Prisma.XOR<Prisma.ExamCreateWithoutExam_attemptInput, Prisma.ExamUncheckedCreateWithoutExam_attemptInput>;
    connectOrCreate?: Prisma.ExamCreateOrConnectWithoutExam_attemptInput;
    upsert?: Prisma.ExamUpsertWithoutExam_attemptInput;
    connect?: Prisma.ExamWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.ExamUpdateToOneWithWhereWithoutExam_attemptInput, Prisma.ExamUpdateWithoutExam_attemptInput>, Prisma.ExamUncheckedUpdateWithoutExam_attemptInput>;
};
export type ExamCreateWithoutUserInput = {
    examname: string;
    start_time: Date | string;
    end_time: Date | string;
    is_delete?: boolean;
    subject: Prisma.SubjectCreateNestedOneWithoutExamInput;
    chapter: Prisma.ChapterCreateNestedOneWithoutExamInput;
    exam_question?: Prisma.Exam_QuestionCreateNestedManyWithoutExamInput;
    exam_attempt?: Prisma.Exam_AttemptCreateNestedManyWithoutExamInput;
};
export type ExamUncheckedCreateWithoutUserInput = {
    examid?: number;
    examname: string;
    subjectid: number;
    chapid: number;
    start_time: Date | string;
    end_time: Date | string;
    is_delete?: boolean;
    exam_question?: Prisma.Exam_QuestionUncheckedCreateNestedManyWithoutExamInput;
    exam_attempt?: Prisma.Exam_AttemptUncheckedCreateNestedManyWithoutExamInput;
};
export type ExamCreateOrConnectWithoutUserInput = {
    where: Prisma.ExamWhereUniqueInput;
    create: Prisma.XOR<Prisma.ExamCreateWithoutUserInput, Prisma.ExamUncheckedCreateWithoutUserInput>;
};
export type ExamCreateManyUserInputEnvelope = {
    data: Prisma.ExamCreateManyUserInput | Prisma.ExamCreateManyUserInput[];
    skipDuplicates?: boolean;
};
export type ExamUpsertWithWhereUniqueWithoutUserInput = {
    where: Prisma.ExamWhereUniqueInput;
    update: Prisma.XOR<Prisma.ExamUpdateWithoutUserInput, Prisma.ExamUncheckedUpdateWithoutUserInput>;
    create: Prisma.XOR<Prisma.ExamCreateWithoutUserInput, Prisma.ExamUncheckedCreateWithoutUserInput>;
};
export type ExamUpdateWithWhereUniqueWithoutUserInput = {
    where: Prisma.ExamWhereUniqueInput;
    data: Prisma.XOR<Prisma.ExamUpdateWithoutUserInput, Prisma.ExamUncheckedUpdateWithoutUserInput>;
};
export type ExamUpdateManyWithWhereWithoutUserInput = {
    where: Prisma.ExamScalarWhereInput;
    data: Prisma.XOR<Prisma.ExamUpdateManyMutationInput, Prisma.ExamUncheckedUpdateManyWithoutUserInput>;
};
export type ExamScalarWhereInput = {
    AND?: Prisma.ExamScalarWhereInput | Prisma.ExamScalarWhereInput[];
    OR?: Prisma.ExamScalarWhereInput[];
    NOT?: Prisma.ExamScalarWhereInput | Prisma.ExamScalarWhereInput[];
    examid?: Prisma.IntFilter<"Exam"> | number;
    examname?: Prisma.StringFilter<"Exam"> | string;
    subjectid?: Prisma.IntFilter<"Exam"> | number;
    chapid?: Prisma.IntFilter<"Exam"> | number;
    userid?: Prisma.IntFilter<"Exam"> | number;
    start_time?: Prisma.DateTimeFilter<"Exam"> | Date | string;
    end_time?: Prisma.DateTimeFilter<"Exam"> | Date | string;
    is_delete?: Prisma.BoolFilter<"Exam"> | boolean;
};
export type ExamCreateWithoutSubjectInput = {
    examname: string;
    start_time: Date | string;
    end_time: Date | string;
    is_delete?: boolean;
    chapter: Prisma.ChapterCreateNestedOneWithoutExamInput;
    user: Prisma.UserCreateNestedOneWithoutExamInput;
    exam_question?: Prisma.Exam_QuestionCreateNestedManyWithoutExamInput;
    exam_attempt?: Prisma.Exam_AttemptCreateNestedManyWithoutExamInput;
};
export type ExamUncheckedCreateWithoutSubjectInput = {
    examid?: number;
    examname: string;
    chapid: number;
    userid: number;
    start_time: Date | string;
    end_time: Date | string;
    is_delete?: boolean;
    exam_question?: Prisma.Exam_QuestionUncheckedCreateNestedManyWithoutExamInput;
    exam_attempt?: Prisma.Exam_AttemptUncheckedCreateNestedManyWithoutExamInput;
};
export type ExamCreateOrConnectWithoutSubjectInput = {
    where: Prisma.ExamWhereUniqueInput;
    create: Prisma.XOR<Prisma.ExamCreateWithoutSubjectInput, Prisma.ExamUncheckedCreateWithoutSubjectInput>;
};
export type ExamCreateManySubjectInputEnvelope = {
    data: Prisma.ExamCreateManySubjectInput | Prisma.ExamCreateManySubjectInput[];
    skipDuplicates?: boolean;
};
export type ExamUpsertWithWhereUniqueWithoutSubjectInput = {
    where: Prisma.ExamWhereUniqueInput;
    update: Prisma.XOR<Prisma.ExamUpdateWithoutSubjectInput, Prisma.ExamUncheckedUpdateWithoutSubjectInput>;
    create: Prisma.XOR<Prisma.ExamCreateWithoutSubjectInput, Prisma.ExamUncheckedCreateWithoutSubjectInput>;
};
export type ExamUpdateWithWhereUniqueWithoutSubjectInput = {
    where: Prisma.ExamWhereUniqueInput;
    data: Prisma.XOR<Prisma.ExamUpdateWithoutSubjectInput, Prisma.ExamUncheckedUpdateWithoutSubjectInput>;
};
export type ExamUpdateManyWithWhereWithoutSubjectInput = {
    where: Prisma.ExamScalarWhereInput;
    data: Prisma.XOR<Prisma.ExamUpdateManyMutationInput, Prisma.ExamUncheckedUpdateManyWithoutSubjectInput>;
};
export type ExamCreateWithoutChapterInput = {
    examname: string;
    start_time: Date | string;
    end_time: Date | string;
    is_delete?: boolean;
    subject: Prisma.SubjectCreateNestedOneWithoutExamInput;
    user: Prisma.UserCreateNestedOneWithoutExamInput;
    exam_question?: Prisma.Exam_QuestionCreateNestedManyWithoutExamInput;
    exam_attempt?: Prisma.Exam_AttemptCreateNestedManyWithoutExamInput;
};
export type ExamUncheckedCreateWithoutChapterInput = {
    examid?: number;
    examname: string;
    subjectid: number;
    userid: number;
    start_time: Date | string;
    end_time: Date | string;
    is_delete?: boolean;
    exam_question?: Prisma.Exam_QuestionUncheckedCreateNestedManyWithoutExamInput;
    exam_attempt?: Prisma.Exam_AttemptUncheckedCreateNestedManyWithoutExamInput;
};
export type ExamCreateOrConnectWithoutChapterInput = {
    where: Prisma.ExamWhereUniqueInput;
    create: Prisma.XOR<Prisma.ExamCreateWithoutChapterInput, Prisma.ExamUncheckedCreateWithoutChapterInput>;
};
export type ExamCreateManyChapterInputEnvelope = {
    data: Prisma.ExamCreateManyChapterInput | Prisma.ExamCreateManyChapterInput[];
    skipDuplicates?: boolean;
};
export type ExamUpsertWithWhereUniqueWithoutChapterInput = {
    where: Prisma.ExamWhereUniqueInput;
    update: Prisma.XOR<Prisma.ExamUpdateWithoutChapterInput, Prisma.ExamUncheckedUpdateWithoutChapterInput>;
    create: Prisma.XOR<Prisma.ExamCreateWithoutChapterInput, Prisma.ExamUncheckedCreateWithoutChapterInput>;
};
export type ExamUpdateWithWhereUniqueWithoutChapterInput = {
    where: Prisma.ExamWhereUniqueInput;
    data: Prisma.XOR<Prisma.ExamUpdateWithoutChapterInput, Prisma.ExamUncheckedUpdateWithoutChapterInput>;
};
export type ExamUpdateManyWithWhereWithoutChapterInput = {
    where: Prisma.ExamScalarWhereInput;
    data: Prisma.XOR<Prisma.ExamUpdateManyMutationInput, Prisma.ExamUncheckedUpdateManyWithoutChapterInput>;
};
export type ExamCreateWithoutExam_questionInput = {
    examname: string;
    start_time: Date | string;
    end_time: Date | string;
    is_delete?: boolean;
    subject: Prisma.SubjectCreateNestedOneWithoutExamInput;
    chapter: Prisma.ChapterCreateNestedOneWithoutExamInput;
    user: Prisma.UserCreateNestedOneWithoutExamInput;
    exam_attempt?: Prisma.Exam_AttemptCreateNestedManyWithoutExamInput;
};
export type ExamUncheckedCreateWithoutExam_questionInput = {
    examid?: number;
    examname: string;
    subjectid: number;
    chapid: number;
    userid: number;
    start_time: Date | string;
    end_time: Date | string;
    is_delete?: boolean;
    exam_attempt?: Prisma.Exam_AttemptUncheckedCreateNestedManyWithoutExamInput;
};
export type ExamCreateOrConnectWithoutExam_questionInput = {
    where: Prisma.ExamWhereUniqueInput;
    create: Prisma.XOR<Prisma.ExamCreateWithoutExam_questionInput, Prisma.ExamUncheckedCreateWithoutExam_questionInput>;
};
export type ExamUpsertWithoutExam_questionInput = {
    update: Prisma.XOR<Prisma.ExamUpdateWithoutExam_questionInput, Prisma.ExamUncheckedUpdateWithoutExam_questionInput>;
    create: Prisma.XOR<Prisma.ExamCreateWithoutExam_questionInput, Prisma.ExamUncheckedCreateWithoutExam_questionInput>;
    where?: Prisma.ExamWhereInput;
};
export type ExamUpdateToOneWithWhereWithoutExam_questionInput = {
    where?: Prisma.ExamWhereInput;
    data: Prisma.XOR<Prisma.ExamUpdateWithoutExam_questionInput, Prisma.ExamUncheckedUpdateWithoutExam_questionInput>;
};
export type ExamUpdateWithoutExam_questionInput = {
    examname?: Prisma.StringFieldUpdateOperationsInput | string;
    start_time?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    end_time?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    is_delete?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    subject?: Prisma.SubjectUpdateOneRequiredWithoutExamNestedInput;
    chapter?: Prisma.ChapterUpdateOneRequiredWithoutExamNestedInput;
    user?: Prisma.UserUpdateOneRequiredWithoutExamNestedInput;
    exam_attempt?: Prisma.Exam_AttemptUpdateManyWithoutExamNestedInput;
};
export type ExamUncheckedUpdateWithoutExam_questionInput = {
    examid?: Prisma.IntFieldUpdateOperationsInput | number;
    examname?: Prisma.StringFieldUpdateOperationsInput | string;
    subjectid?: Prisma.IntFieldUpdateOperationsInput | number;
    chapid?: Prisma.IntFieldUpdateOperationsInput | number;
    userid?: Prisma.IntFieldUpdateOperationsInput | number;
    start_time?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    end_time?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    is_delete?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    exam_attempt?: Prisma.Exam_AttemptUncheckedUpdateManyWithoutExamNestedInput;
};
export type ExamCreateWithoutExam_attemptInput = {
    examname: string;
    start_time: Date | string;
    end_time: Date | string;
    is_delete?: boolean;
    subject: Prisma.SubjectCreateNestedOneWithoutExamInput;
    chapter: Prisma.ChapterCreateNestedOneWithoutExamInput;
    user: Prisma.UserCreateNestedOneWithoutExamInput;
    exam_question?: Prisma.Exam_QuestionCreateNestedManyWithoutExamInput;
};
export type ExamUncheckedCreateWithoutExam_attemptInput = {
    examid?: number;
    examname: string;
    subjectid: number;
    chapid: number;
    userid: number;
    start_time: Date | string;
    end_time: Date | string;
    is_delete?: boolean;
    exam_question?: Prisma.Exam_QuestionUncheckedCreateNestedManyWithoutExamInput;
};
export type ExamCreateOrConnectWithoutExam_attemptInput = {
    where: Prisma.ExamWhereUniqueInput;
    create: Prisma.XOR<Prisma.ExamCreateWithoutExam_attemptInput, Prisma.ExamUncheckedCreateWithoutExam_attemptInput>;
};
export type ExamUpsertWithoutExam_attemptInput = {
    update: Prisma.XOR<Prisma.ExamUpdateWithoutExam_attemptInput, Prisma.ExamUncheckedUpdateWithoutExam_attemptInput>;
    create: Prisma.XOR<Prisma.ExamCreateWithoutExam_attemptInput, Prisma.ExamUncheckedCreateWithoutExam_attemptInput>;
    where?: Prisma.ExamWhereInput;
};
export type ExamUpdateToOneWithWhereWithoutExam_attemptInput = {
    where?: Prisma.ExamWhereInput;
    data: Prisma.XOR<Prisma.ExamUpdateWithoutExam_attemptInput, Prisma.ExamUncheckedUpdateWithoutExam_attemptInput>;
};
export type ExamUpdateWithoutExam_attemptInput = {
    examname?: Prisma.StringFieldUpdateOperationsInput | string;
    start_time?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    end_time?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    is_delete?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    subject?: Prisma.SubjectUpdateOneRequiredWithoutExamNestedInput;
    chapter?: Prisma.ChapterUpdateOneRequiredWithoutExamNestedInput;
    user?: Prisma.UserUpdateOneRequiredWithoutExamNestedInput;
    exam_question?: Prisma.Exam_QuestionUpdateManyWithoutExamNestedInput;
};
export type ExamUncheckedUpdateWithoutExam_attemptInput = {
    examid?: Prisma.IntFieldUpdateOperationsInput | number;
    examname?: Prisma.StringFieldUpdateOperationsInput | string;
    subjectid?: Prisma.IntFieldUpdateOperationsInput | number;
    chapid?: Prisma.IntFieldUpdateOperationsInput | number;
    userid?: Prisma.IntFieldUpdateOperationsInput | number;
    start_time?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    end_time?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    is_delete?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    exam_question?: Prisma.Exam_QuestionUncheckedUpdateManyWithoutExamNestedInput;
};
export type ExamCreateManyUserInput = {
    examid?: number;
    examname: string;
    subjectid: number;
    chapid: number;
    start_time: Date | string;
    end_time: Date | string;
    is_delete?: boolean;
};
export type ExamUpdateWithoutUserInput = {
    examname?: Prisma.StringFieldUpdateOperationsInput | string;
    start_time?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    end_time?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    is_delete?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    subject?: Prisma.SubjectUpdateOneRequiredWithoutExamNestedInput;
    chapter?: Prisma.ChapterUpdateOneRequiredWithoutExamNestedInput;
    exam_question?: Prisma.Exam_QuestionUpdateManyWithoutExamNestedInput;
    exam_attempt?: Prisma.Exam_AttemptUpdateManyWithoutExamNestedInput;
};
export type ExamUncheckedUpdateWithoutUserInput = {
    examid?: Prisma.IntFieldUpdateOperationsInput | number;
    examname?: Prisma.StringFieldUpdateOperationsInput | string;
    subjectid?: Prisma.IntFieldUpdateOperationsInput | number;
    chapid?: Prisma.IntFieldUpdateOperationsInput | number;
    start_time?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    end_time?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    is_delete?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    exam_question?: Prisma.Exam_QuestionUncheckedUpdateManyWithoutExamNestedInput;
    exam_attempt?: Prisma.Exam_AttemptUncheckedUpdateManyWithoutExamNestedInput;
};
export type ExamUncheckedUpdateManyWithoutUserInput = {
    examid?: Prisma.IntFieldUpdateOperationsInput | number;
    examname?: Prisma.StringFieldUpdateOperationsInput | string;
    subjectid?: Prisma.IntFieldUpdateOperationsInput | number;
    chapid?: Prisma.IntFieldUpdateOperationsInput | number;
    start_time?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    end_time?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    is_delete?: Prisma.BoolFieldUpdateOperationsInput | boolean;
};
export type ExamCreateManySubjectInput = {
    examid?: number;
    examname: string;
    chapid: number;
    userid: number;
    start_time: Date | string;
    end_time: Date | string;
    is_delete?: boolean;
};
export type ExamUpdateWithoutSubjectInput = {
    examname?: Prisma.StringFieldUpdateOperationsInput | string;
    start_time?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    end_time?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    is_delete?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    chapter?: Prisma.ChapterUpdateOneRequiredWithoutExamNestedInput;
    user?: Prisma.UserUpdateOneRequiredWithoutExamNestedInput;
    exam_question?: Prisma.Exam_QuestionUpdateManyWithoutExamNestedInput;
    exam_attempt?: Prisma.Exam_AttemptUpdateManyWithoutExamNestedInput;
};
export type ExamUncheckedUpdateWithoutSubjectInput = {
    examid?: Prisma.IntFieldUpdateOperationsInput | number;
    examname?: Prisma.StringFieldUpdateOperationsInput | string;
    chapid?: Prisma.IntFieldUpdateOperationsInput | number;
    userid?: Prisma.IntFieldUpdateOperationsInput | number;
    start_time?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    end_time?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    is_delete?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    exam_question?: Prisma.Exam_QuestionUncheckedUpdateManyWithoutExamNestedInput;
    exam_attempt?: Prisma.Exam_AttemptUncheckedUpdateManyWithoutExamNestedInput;
};
export type ExamUncheckedUpdateManyWithoutSubjectInput = {
    examid?: Prisma.IntFieldUpdateOperationsInput | number;
    examname?: Prisma.StringFieldUpdateOperationsInput | string;
    chapid?: Prisma.IntFieldUpdateOperationsInput | number;
    userid?: Prisma.IntFieldUpdateOperationsInput | number;
    start_time?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    end_time?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    is_delete?: Prisma.BoolFieldUpdateOperationsInput | boolean;
};
export type ExamCreateManyChapterInput = {
    examid?: number;
    examname: string;
    subjectid: number;
    userid: number;
    start_time: Date | string;
    end_time: Date | string;
    is_delete?: boolean;
};
export type ExamUpdateWithoutChapterInput = {
    examname?: Prisma.StringFieldUpdateOperationsInput | string;
    start_time?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    end_time?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    is_delete?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    subject?: Prisma.SubjectUpdateOneRequiredWithoutExamNestedInput;
    user?: Prisma.UserUpdateOneRequiredWithoutExamNestedInput;
    exam_question?: Prisma.Exam_QuestionUpdateManyWithoutExamNestedInput;
    exam_attempt?: Prisma.Exam_AttemptUpdateManyWithoutExamNestedInput;
};
export type ExamUncheckedUpdateWithoutChapterInput = {
    examid?: Prisma.IntFieldUpdateOperationsInput | number;
    examname?: Prisma.StringFieldUpdateOperationsInput | string;
    subjectid?: Prisma.IntFieldUpdateOperationsInput | number;
    userid?: Prisma.IntFieldUpdateOperationsInput | number;
    start_time?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    end_time?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    is_delete?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    exam_question?: Prisma.Exam_QuestionUncheckedUpdateManyWithoutExamNestedInput;
    exam_attempt?: Prisma.Exam_AttemptUncheckedUpdateManyWithoutExamNestedInput;
};
export type ExamUncheckedUpdateManyWithoutChapterInput = {
    examid?: Prisma.IntFieldUpdateOperationsInput | number;
    examname?: Prisma.StringFieldUpdateOperationsInput | string;
    subjectid?: Prisma.IntFieldUpdateOperationsInput | number;
    userid?: Prisma.IntFieldUpdateOperationsInput | number;
    start_time?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    end_time?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    is_delete?: Prisma.BoolFieldUpdateOperationsInput | boolean;
};
/**
 * Count Type ExamCountOutputType
 */
export type ExamCountOutputType = {
    exam_question: number;
    exam_attempt: number;
};
export type ExamCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    exam_question?: boolean | ExamCountOutputTypeCountExam_questionArgs;
    exam_attempt?: boolean | ExamCountOutputTypeCountExam_attemptArgs;
};
/**
 * ExamCountOutputType without action
 */
export type ExamCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExamCountOutputType
     */
    select?: Prisma.ExamCountOutputTypeSelect<ExtArgs> | null;
};
/**
 * ExamCountOutputType without action
 */
export type ExamCountOutputTypeCountExam_questionArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.Exam_QuestionWhereInput;
};
/**
 * ExamCountOutputType without action
 */
export type ExamCountOutputTypeCountExam_attemptArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.Exam_AttemptWhereInput;
};
export type ExamSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    examid?: boolean;
    examname?: boolean;
    subjectid?: boolean;
    chapid?: boolean;
    userid?: boolean;
    start_time?: boolean;
    end_time?: boolean;
    is_delete?: boolean;
    subject?: boolean | Prisma.SubjectDefaultArgs<ExtArgs>;
    chapter?: boolean | Prisma.ChapterDefaultArgs<ExtArgs>;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    exam_question?: boolean | Prisma.Exam$exam_questionArgs<ExtArgs>;
    exam_attempt?: boolean | Prisma.Exam$exam_attemptArgs<ExtArgs>;
    _count?: boolean | Prisma.ExamCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["exam"]>;
export type ExamSelectScalar = {
    examid?: boolean;
    examname?: boolean;
    subjectid?: boolean;
    chapid?: boolean;
    userid?: boolean;
    start_time?: boolean;
    end_time?: boolean;
    is_delete?: boolean;
};
export type ExamOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"examid" | "examname" | "subjectid" | "chapid" | "userid" | "start_time" | "end_time" | "is_delete", ExtArgs["result"]["exam"]>;
export type ExamInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    subject?: boolean | Prisma.SubjectDefaultArgs<ExtArgs>;
    chapter?: boolean | Prisma.ChapterDefaultArgs<ExtArgs>;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    exam_question?: boolean | Prisma.Exam$exam_questionArgs<ExtArgs>;
    exam_attempt?: boolean | Prisma.Exam$exam_attemptArgs<ExtArgs>;
    _count?: boolean | Prisma.ExamCountOutputTypeDefaultArgs<ExtArgs>;
};
export type $ExamPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Exam";
    objects: {
        subject: Prisma.$SubjectPayload<ExtArgs>;
        chapter: Prisma.$ChapterPayload<ExtArgs>;
        user: Prisma.$UserPayload<ExtArgs>;
        exam_question: Prisma.$Exam_QuestionPayload<ExtArgs>[];
        exam_attempt: Prisma.$Exam_AttemptPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        examid: number;
        examname: string;
        subjectid: number;
        chapid: number;
        userid: number;
        start_time: Date;
        end_time: Date;
        is_delete: boolean;
    }, ExtArgs["result"]["exam"]>;
    composites: {};
};
export type ExamGetPayload<S extends boolean | null | undefined | ExamDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$ExamPayload, S>;
export type ExamCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<ExamFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: ExamCountAggregateInputType | true;
};
export interface ExamDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Exam'];
        meta: {
            name: 'Exam';
        };
    };
    /**
     * Find zero or one Exam that matches the filter.
     * @param {ExamFindUniqueArgs} args - Arguments to find a Exam
     * @example
     * // Get one Exam
     * const exam = await prisma.exam.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ExamFindUniqueArgs>(args: Prisma.SelectSubset<T, ExamFindUniqueArgs<ExtArgs>>): Prisma.Prisma__ExamClient<runtime.Types.Result.GetResult<Prisma.$ExamPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one Exam that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ExamFindUniqueOrThrowArgs} args - Arguments to find a Exam
     * @example
     * // Get one Exam
     * const exam = await prisma.exam.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ExamFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, ExamFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__ExamClient<runtime.Types.Result.GetResult<Prisma.$ExamPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Exam that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExamFindFirstArgs} args - Arguments to find a Exam
     * @example
     * // Get one Exam
     * const exam = await prisma.exam.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ExamFindFirstArgs>(args?: Prisma.SelectSubset<T, ExamFindFirstArgs<ExtArgs>>): Prisma.Prisma__ExamClient<runtime.Types.Result.GetResult<Prisma.$ExamPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Exam that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExamFindFirstOrThrowArgs} args - Arguments to find a Exam
     * @example
     * // Get one Exam
     * const exam = await prisma.exam.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ExamFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, ExamFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__ExamClient<runtime.Types.Result.GetResult<Prisma.$ExamPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more Exams that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExamFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Exams
     * const exams = await prisma.exam.findMany()
     *
     * // Get first 10 Exams
     * const exams = await prisma.exam.findMany({ take: 10 })
     *
     * // Only select the `examid`
     * const examWithExamidOnly = await prisma.exam.findMany({ select: { examid: true } })
     *
     */
    findMany<T extends ExamFindManyArgs>(args?: Prisma.SelectSubset<T, ExamFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ExamPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a Exam.
     * @param {ExamCreateArgs} args - Arguments to create a Exam.
     * @example
     * // Create one Exam
     * const Exam = await prisma.exam.create({
     *   data: {
     *     // ... data to create a Exam
     *   }
     * })
     *
     */
    create<T extends ExamCreateArgs>(args: Prisma.SelectSubset<T, ExamCreateArgs<ExtArgs>>): Prisma.Prisma__ExamClient<runtime.Types.Result.GetResult<Prisma.$ExamPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many Exams.
     * @param {ExamCreateManyArgs} args - Arguments to create many Exams.
     * @example
     * // Create many Exams
     * const exam = await prisma.exam.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends ExamCreateManyArgs>(args?: Prisma.SelectSubset<T, ExamCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Delete a Exam.
     * @param {ExamDeleteArgs} args - Arguments to delete one Exam.
     * @example
     * // Delete one Exam
     * const Exam = await prisma.exam.delete({
     *   where: {
     *     // ... filter to delete one Exam
     *   }
     * })
     *
     */
    delete<T extends ExamDeleteArgs>(args: Prisma.SelectSubset<T, ExamDeleteArgs<ExtArgs>>): Prisma.Prisma__ExamClient<runtime.Types.Result.GetResult<Prisma.$ExamPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one Exam.
     * @param {ExamUpdateArgs} args - Arguments to update one Exam.
     * @example
     * // Update one Exam
     * const exam = await prisma.exam.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends ExamUpdateArgs>(args: Prisma.SelectSubset<T, ExamUpdateArgs<ExtArgs>>): Prisma.Prisma__ExamClient<runtime.Types.Result.GetResult<Prisma.$ExamPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more Exams.
     * @param {ExamDeleteManyArgs} args - Arguments to filter Exams to delete.
     * @example
     * // Delete a few Exams
     * const { count } = await prisma.exam.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends ExamDeleteManyArgs>(args?: Prisma.SelectSubset<T, ExamDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Exams.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExamUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Exams
     * const exam = await prisma.exam.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends ExamUpdateManyArgs>(args: Prisma.SelectSubset<T, ExamUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create or update one Exam.
     * @param {ExamUpsertArgs} args - Arguments to update or create a Exam.
     * @example
     * // Update or create a Exam
     * const exam = await prisma.exam.upsert({
     *   create: {
     *     // ... data to create a Exam
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Exam we want to update
     *   }
     * })
     */
    upsert<T extends ExamUpsertArgs>(args: Prisma.SelectSubset<T, ExamUpsertArgs<ExtArgs>>): Prisma.Prisma__ExamClient<runtime.Types.Result.GetResult<Prisma.$ExamPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of Exams.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExamCountArgs} args - Arguments to filter Exams to count.
     * @example
     * // Count the number of Exams
     * const count = await prisma.exam.count({
     *   where: {
     *     // ... the filter for the Exams we want to count
     *   }
     * })
    **/
    count<T extends ExamCountArgs>(args?: Prisma.Subset<T, ExamCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], ExamCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a Exam.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExamAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ExamAggregateArgs>(args: Prisma.Subset<T, ExamAggregateArgs>): Prisma.PrismaPromise<GetExamAggregateType<T>>;
    /**
     * Group by Exam.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExamGroupByArgs} args - Group by arguments.
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
    groupBy<T extends ExamGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: ExamGroupByArgs['orderBy'];
    } : {
        orderBy?: ExamGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, ExamGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetExamGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the Exam model
     */
    readonly fields: ExamFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for Exam.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__ExamClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    subject<T extends Prisma.SubjectDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.SubjectDefaultArgs<ExtArgs>>): Prisma.Prisma__SubjectClient<runtime.Types.Result.GetResult<Prisma.$SubjectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    chapter<T extends Prisma.ChapterDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ChapterDefaultArgs<ExtArgs>>): Prisma.Prisma__ChapterClient<runtime.Types.Result.GetResult<Prisma.$ChapterPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    user<T extends Prisma.UserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UserDefaultArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    exam_question<T extends Prisma.Exam$exam_questionArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Exam$exam_questionArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$Exam_QuestionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    exam_attempt<T extends Prisma.Exam$exam_attemptArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Exam$exam_attemptArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$Exam_AttemptPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
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
 * Fields of the Exam model
 */
export interface ExamFieldRefs {
    readonly examid: Prisma.FieldRef<"Exam", 'Int'>;
    readonly examname: Prisma.FieldRef<"Exam", 'String'>;
    readonly subjectid: Prisma.FieldRef<"Exam", 'Int'>;
    readonly chapid: Prisma.FieldRef<"Exam", 'Int'>;
    readonly userid: Prisma.FieldRef<"Exam", 'Int'>;
    readonly start_time: Prisma.FieldRef<"Exam", 'DateTime'>;
    readonly end_time: Prisma.FieldRef<"Exam", 'DateTime'>;
    readonly is_delete: Prisma.FieldRef<"Exam", 'Boolean'>;
}
/**
 * Exam findUnique
 */
export type ExamFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exam
     */
    select?: Prisma.ExamSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Exam
     */
    omit?: Prisma.ExamOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ExamInclude<ExtArgs> | null;
    /**
     * Filter, which Exam to fetch.
     */
    where: Prisma.ExamWhereUniqueInput;
};
/**
 * Exam findUniqueOrThrow
 */
export type ExamFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exam
     */
    select?: Prisma.ExamSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Exam
     */
    omit?: Prisma.ExamOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ExamInclude<ExtArgs> | null;
    /**
     * Filter, which Exam to fetch.
     */
    where: Prisma.ExamWhereUniqueInput;
};
/**
 * Exam findFirst
 */
export type ExamFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exam
     */
    select?: Prisma.ExamSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Exam
     */
    omit?: Prisma.ExamOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ExamInclude<ExtArgs> | null;
    /**
     * Filter, which Exam to fetch.
     */
    where?: Prisma.ExamWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Exams to fetch.
     */
    orderBy?: Prisma.ExamOrderByWithRelationInput | Prisma.ExamOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Exams.
     */
    cursor?: Prisma.ExamWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Exams from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Exams.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Exams.
     */
    distinct?: Prisma.ExamScalarFieldEnum | Prisma.ExamScalarFieldEnum[];
};
/**
 * Exam findFirstOrThrow
 */
export type ExamFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exam
     */
    select?: Prisma.ExamSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Exam
     */
    omit?: Prisma.ExamOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ExamInclude<ExtArgs> | null;
    /**
     * Filter, which Exam to fetch.
     */
    where?: Prisma.ExamWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Exams to fetch.
     */
    orderBy?: Prisma.ExamOrderByWithRelationInput | Prisma.ExamOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Exams.
     */
    cursor?: Prisma.ExamWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Exams from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Exams.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Exams.
     */
    distinct?: Prisma.ExamScalarFieldEnum | Prisma.ExamScalarFieldEnum[];
};
/**
 * Exam findMany
 */
export type ExamFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exam
     */
    select?: Prisma.ExamSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Exam
     */
    omit?: Prisma.ExamOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ExamInclude<ExtArgs> | null;
    /**
     * Filter, which Exams to fetch.
     */
    where?: Prisma.ExamWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Exams to fetch.
     */
    orderBy?: Prisma.ExamOrderByWithRelationInput | Prisma.ExamOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Exams.
     */
    cursor?: Prisma.ExamWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Exams from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Exams.
     */
    skip?: number;
    distinct?: Prisma.ExamScalarFieldEnum | Prisma.ExamScalarFieldEnum[];
};
/**
 * Exam create
 */
export type ExamCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exam
     */
    select?: Prisma.ExamSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Exam
     */
    omit?: Prisma.ExamOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ExamInclude<ExtArgs> | null;
    /**
     * The data needed to create a Exam.
     */
    data: Prisma.XOR<Prisma.ExamCreateInput, Prisma.ExamUncheckedCreateInput>;
};
/**
 * Exam createMany
 */
export type ExamCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many Exams.
     */
    data: Prisma.ExamCreateManyInput | Prisma.ExamCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * Exam update
 */
export type ExamUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exam
     */
    select?: Prisma.ExamSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Exam
     */
    omit?: Prisma.ExamOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ExamInclude<ExtArgs> | null;
    /**
     * The data needed to update a Exam.
     */
    data: Prisma.XOR<Prisma.ExamUpdateInput, Prisma.ExamUncheckedUpdateInput>;
    /**
     * Choose, which Exam to update.
     */
    where: Prisma.ExamWhereUniqueInput;
};
/**
 * Exam updateMany
 */
export type ExamUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update Exams.
     */
    data: Prisma.XOR<Prisma.ExamUpdateManyMutationInput, Prisma.ExamUncheckedUpdateManyInput>;
    /**
     * Filter which Exams to update
     */
    where?: Prisma.ExamWhereInput;
    /**
     * Limit how many Exams to update.
     */
    limit?: number;
};
/**
 * Exam upsert
 */
export type ExamUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exam
     */
    select?: Prisma.ExamSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Exam
     */
    omit?: Prisma.ExamOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ExamInclude<ExtArgs> | null;
    /**
     * The filter to search for the Exam to update in case it exists.
     */
    where: Prisma.ExamWhereUniqueInput;
    /**
     * In case the Exam found by the `where` argument doesn't exist, create a new Exam with this data.
     */
    create: Prisma.XOR<Prisma.ExamCreateInput, Prisma.ExamUncheckedCreateInput>;
    /**
     * In case the Exam was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.ExamUpdateInput, Prisma.ExamUncheckedUpdateInput>;
};
/**
 * Exam delete
 */
export type ExamDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exam
     */
    select?: Prisma.ExamSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Exam
     */
    omit?: Prisma.ExamOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ExamInclude<ExtArgs> | null;
    /**
     * Filter which Exam to delete.
     */
    where: Prisma.ExamWhereUniqueInput;
};
/**
 * Exam deleteMany
 */
export type ExamDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which Exams to delete
     */
    where?: Prisma.ExamWhereInput;
    /**
     * Limit how many Exams to delete.
     */
    limit?: number;
};
/**
 * Exam.exam_question
 */
export type Exam$exam_questionArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
 * Exam.exam_attempt
 */
export type Exam$exam_attemptArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exam_Attempt
     */
    select?: Prisma.Exam_AttemptSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Exam_Attempt
     */
    omit?: Prisma.Exam_AttemptOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.Exam_AttemptInclude<ExtArgs> | null;
    where?: Prisma.Exam_AttemptWhereInput;
    orderBy?: Prisma.Exam_AttemptOrderByWithRelationInput | Prisma.Exam_AttemptOrderByWithRelationInput[];
    cursor?: Prisma.Exam_AttemptWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Exam_AttemptScalarFieldEnum | Prisma.Exam_AttemptScalarFieldEnum[];
};
/**
 * Exam without action
 */
export type ExamDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exam
     */
    select?: Prisma.ExamSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Exam
     */
    omit?: Prisma.ExamOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ExamInclude<ExtArgs> | null;
};
export {};
//# sourceMappingURL=Exam.d.ts.map