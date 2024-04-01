import prisma from '../../../lib/prisma';

export const getAllSubjects = async () => {
  return await prisma.subject.findMany();
};

export const getSubjectById = async (id) => {
  return await prisma.subject.findUnique({
    where: { id },
  });
};

export const createSubject = async (data) => {
  return await prisma.subject.create({
    data,
  });
};

export const updateSubject = async (id, data) => {
  return await prisma.subject.update({
    where: { id },
    data,
  });
};

export const deleteSubject = async (id) => {
  return await prisma.subject.update({
    where: { id },
    data: { status: 0 },
  });
};
