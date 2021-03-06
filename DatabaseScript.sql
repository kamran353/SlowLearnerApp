USE [SlowLearner]
GO
/****** Object:  Table [dbo].[AppoinmentPractice]    Script Date: 17-Feb-2022 3:47:34 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[AppoinmentPractice](
	[AppPracticeId] [int] IDENTITY(1,1) NOT NULL,
	[AppId] [int] NULL,
	[PracticeId] [int] NULL,
	[PaRemarks] [nvarchar](max) NULL,
PRIMARY KEY CLUSTERED 
(
	[AppPracticeId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Appointment]    Script Date: 17-Feb-2022 3:47:34 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Appointment](
	[AppId] [int] IDENTITY(1,1) NOT NULL,
	[AppDate] [datetime] NULL,
	[IsActive] [bit] NULL,
	[DoctorId] [int] NULL,
	[PatientId] [int] NULL,
	[Remarks] [nvarchar](max) NULL,
	[LevelNo] [int] NULL,
	[IsComplete] [bit] NULL,
PRIMARY KEY CLUSTERED 
(
	[AppId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[AppointmentRequests]    Script Date: 17-Feb-2022 3:47:34 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[AppointmentRequests](
	[RequestId] [int] IDENTITY(1,1) NOT NULL,
	[PatientId] [int] NULL,
	[DoctorId] [int] NULL,
	[RequestedDate] [datetime] NULL,
	[LevelNo] [int] NULL,
	[IsAccepted] [bit] NULL,
PRIMARY KEY CLUSTERED 
(
	[RequestId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Collections]    Script Date: 17-Feb-2022 3:47:34 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Collections](
	[CollectionId] [int] IDENTITY(1,1) NOT NULL,
	[CollectionType] [varchar](200) NULL,
	[CollectionText] [nvarchar](max) NULL,
	[CollectionImage] [varchar](max) NULL,
	[DoctorId] [int] NULL,
	[CollectionAudio] [varchar](max) NULL,
	[CategoryId] [int] NULL,
PRIMARY KEY CLUSTERED 
(
	[CollectionId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[PatientAnswers]    Script Date: 17-Feb-2022 3:47:34 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[PatientAnswers](
	[AnsId] [int] IDENTITY(1,1) NOT NULL,
	[AppPracticeId] [int] NULL,
	[CollectionText] [varchar](max) NULL,
	[CollectionImage] [varchar](max) NULL,
	[CollectionAudio] [varchar](max) NULL,
	[IsAttempted] [bit] NULL,
	[IsRight] [bit] NULL,
	[PatientSelectedText] [varchar](1000) NULL,
PRIMARY KEY CLUSTERED 
(
	[AnsId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[PatientAttendants]    Script Date: 17-Feb-2022 3:47:34 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[PatientAttendants](
	[PatientAttendantId] [int] IDENTITY(1,1) NOT NULL,
	[PatientId] [int] NULL,
	[AttendantId] [int] NULL,
PRIMARY KEY CLUSTERED 
(
	[PatientAttendantId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[PatientPractice]    Script Date: 17-Feb-2022 3:47:34 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[PatientPractice](
	[PatientPracticeId] [int] IDENTITY(1,1) NOT NULL,
	[PatientId] [int] NULL,
	[PracticeId] [int] NULL,
PRIMARY KEY CLUSTERED 
(
	[PatientPracticeId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Practice]    Script Date: 17-Feb-2022 3:47:34 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Practice](
	[PracticeId] [int] IDENTITY(1,1) NOT NULL,
	[PracticeTitle] [nvarchar](max) NULL,
	[PracticeLevel] [int] NULL,
	[DoctorId] [int] NULL,
PRIMARY KEY CLUSTERED 
(
	[PracticeId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[PracticeCollection]    Script Date: 17-Feb-2022 3:47:34 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[PracticeCollection](
	[PracticeCollectionId] [int] IDENTITY(1,1) NOT NULL,
	[PracticeId] [int] NULL,
	[CollectionId] [int] NULL,
PRIMARY KEY CLUSTERED 
(
	[PracticeCollectionId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[ReferredPatient]    Script Date: 17-Feb-2022 3:47:34 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[ReferredPatient](
	[ReferId] [int] IDENTITY(1,1) NOT NULL,
	[PatientId] [int] NULL,
	[FromDoctorId] [int] NULL,
	[ToDoctorId] [int] NULL,
PRIMARY KEY CLUSTERED 
(
	[ReferId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Users]    Script Date: 17-Feb-2022 3:47:34 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Users](
	[UserId] [int] IDENTITY(1,1) NOT NULL,
	[UserName] [varchar](1000) NULL,
	[UserPhone] [varchar](100) NULL,
	[UserGender] [varchar](100) NULL,
	[UserPassword] [varchar](100) NULL,
	[UserDOB] [datetime] NULL,
	[IsApproved] [bit] NULL,
	[UserRole] [varchar](100) NULL,
	[ReferenceUserId] [int] NULL,
PRIMARY KEY CLUSTERED 
(
	[UserId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[UserTemplate]    Script Date: 17-Feb-2022 3:47:34 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[UserTemplate](
	[TemplateId] [int] IDENTITY(1,1) NOT NULL,
	[TemplateText] [varchar](500) NULL,
	[TemplateType] [int] NULL,
	[DoctorId] [int] NULL,
PRIMARY KEY CLUSTERED 
(
	[TemplateId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[WordsCategory]    Script Date: 17-Feb-2022 3:47:34 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[WordsCategory](
	[CategoryId] [int] IDENTITY(1,1) NOT NULL,
	[Title] [varchar](500) NULL,
	[DoctorId] [int] NULL,
PRIMARY KEY CLUSTERED 
(
	[CategoryId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[WordsTemplate]    Script Date: 17-Feb-2022 3:47:34 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[WordsTemplate](
	[WordTemplateId] [int] IDENTITY(1,1) NOT NULL,
	[WordTemplateText] [varchar](500) NULL,
	[TemplateType] [varchar](500) NULL,
	[FirstBlankCategoryId] [int] NULL,
	[SecondBlankCategoryId] [int] NULL,
	[DoctorId] [int] NULL,
PRIMARY KEY CLUSTERED 
(
	[WordTemplateId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
SET IDENTITY_INSERT [dbo].[AppoinmentPractice] ON 

INSERT [dbo].[AppoinmentPractice] ([AppPracticeId], [AppId], [PracticeId], [PaRemarks]) VALUES (10, 12, 1019, N'')
INSERT [dbo].[AppoinmentPractice] ([AppPracticeId], [AppId], [PracticeId], [PaRemarks]) VALUES (11, 12, 1020, N'')
INSERT [dbo].[AppoinmentPractice] ([AppPracticeId], [AppId], [PracticeId], [PaRemarks]) VALUES (12, 15, 1016, N'')
INSERT [dbo].[AppoinmentPractice] ([AppPracticeId], [AppId], [PracticeId], [PaRemarks]) VALUES (13, 15, 1017, N'')
INSERT [dbo].[AppoinmentPractice] ([AppPracticeId], [AppId], [PracticeId], [PaRemarks]) VALUES (14, 15, 1018, N'')
INSERT [dbo].[AppoinmentPractice] ([AppPracticeId], [AppId], [PracticeId], [PaRemarks]) VALUES (15, 16, 1016, N'')
INSERT [dbo].[AppoinmentPractice] ([AppPracticeId], [AppId], [PracticeId], [PaRemarks]) VALUES (16, 16, 1017, N'')
INSERT [dbo].[AppoinmentPractice] ([AppPracticeId], [AppId], [PracticeId], [PaRemarks]) VALUES (17, 16, 1018, N'')
INSERT [dbo].[AppoinmentPractice] ([AppPracticeId], [AppId], [PracticeId], [PaRemarks]) VALUES (18, 16, 1016, N'')
INSERT [dbo].[AppoinmentPractice] ([AppPracticeId], [AppId], [PracticeId], [PaRemarks]) VALUES (19, 16, 1017, N'')
INSERT [dbo].[AppoinmentPractice] ([AppPracticeId], [AppId], [PracticeId], [PaRemarks]) VALUES (20, 16, 1018, N'')
INSERT [dbo].[AppoinmentPractice] ([AppPracticeId], [AppId], [PracticeId], [PaRemarks]) VALUES (21, 14, 1013, N'')
INSERT [dbo].[AppoinmentPractice] ([AppPracticeId], [AppId], [PracticeId], [PaRemarks]) VALUES (22, 14, 1014, N'')
INSERT [dbo].[AppoinmentPractice] ([AppPracticeId], [AppId], [PracticeId], [PaRemarks]) VALUES (23, 14, 1015, N'')
SET IDENTITY_INSERT [dbo].[AppoinmentPractice] OFF
GO
SET IDENTITY_INSERT [dbo].[Appointment] ON 

INSERT [dbo].[Appointment] ([AppId], [AppDate], [IsActive], [DoctorId], [PatientId], [Remarks], [LevelNo], [IsComplete]) VALUES (12, CAST(N'2022-02-16T22:33:21.627' AS DateTime), 0, 1, 4007, N'First Appointment', 3, 1)
INSERT [dbo].[Appointment] ([AppId], [AppDate], [IsActive], [DoctorId], [PatientId], [Remarks], [LevelNo], [IsComplete]) VALUES (14, CAST(N'2022-02-16T22:33:21.627' AS DateTime), 1, 1, 4006, N'First appointment', 1, 0)
INSERT [dbo].[Appointment] ([AppId], [AppDate], [IsActive], [DoctorId], [PatientId], [Remarks], [LevelNo], [IsComplete]) VALUES (15, CAST(N'2022-02-16T22:33:21.627' AS DateTime), 1, 1, 4007, N'2nd Appointment', 2, 0)
INSERT [dbo].[Appointment] ([AppId], [AppDate], [IsActive], [DoctorId], [PatientId], [Remarks], [LevelNo], [IsComplete]) VALUES (16, CAST(N'2022-02-16T22:33:21.627' AS DateTime), 1, 1, 4007, NULL, 1, 0)
SET IDENTITY_INSERT [dbo].[Appointment] OFF
GO
SET IDENTITY_INSERT [dbo].[Collections] ON 

INSERT [dbo].[Collections] ([CollectionId], [CollectionType], [CollectionText], [CollectionImage], [DoctorId], [CollectionAudio], [CategoryId]) VALUES (1020, N'Letter', N'A', N'Images/b25b21e5-bc23-4553-8a30-3cfd00b14deb_3230.png', 1, N'Images/603b1f18-7bff-440f-a90c-c6ecf95303ff_3550.mp3', 0)
INSERT [dbo].[Collections] ([CollectionId], [CollectionType], [CollectionText], [CollectionImage], [DoctorId], [CollectionAudio], [CategoryId]) VALUES (1021, N'Letter', N'B', N'Images/b429729c-3881-4ff9-8275-1ce2800e2e7d_3243.jpg', 1, N'Images/b29ee861-934e-46f1-b0bf-58acafc556c5_3602.mp3', 0)
INSERT [dbo].[Collections] ([CollectionId], [CollectionType], [CollectionText], [CollectionImage], [DoctorId], [CollectionAudio], [CategoryId]) VALUES (1022, N'Letter', N'C', N'Images/d1391189-06be-4da4-9baf-8e03dd52ffbd_3253.png', 1, N'Images/edca99ec-de51-4d04-a53c-03a08130540f_3614.mp3', 0)
INSERT [dbo].[Collections] ([CollectionId], [CollectionType], [CollectionText], [CollectionImage], [DoctorId], [CollectionAudio], [CategoryId]) VALUES (1023, N'Word', N'Apple', N'Images/44112053-21a5-47d5-8fc2-f649af41bcc3_3309.jpg', 1, N'Images/a68843b3-7ca9-4f26-b372-319083c289ad_3714.mp3', 3)
INSERT [dbo].[Collections] ([CollectionId], [CollectionType], [CollectionText], [CollectionImage], [DoctorId], [CollectionAudio], [CategoryId]) VALUES (1024, N'Word', N'Banana', N'Images/f5e468f1-19a6-4381-b7b2-ef3d6dd69c9f_3327.jpg', 1, N'Images/2c021493-6655-41e4-9afb-55f3dbd7ed3a_3725.mp3', 3)
INSERT [dbo].[Collections] ([CollectionId], [CollectionType], [CollectionText], [CollectionImage], [DoctorId], [CollectionAudio], [CategoryId]) VALUES (1025, N'Word', N'Dates', N'Images/b530ff34-9bb0-43fd-b2cf-57de0a7ce15b_3339.jpg', 1, N'Images/0a2941d0-0753-44db-82bf-3aa2526ff8f2_3741.mp3', 3)
INSERT [dbo].[Collections] ([CollectionId], [CollectionType], [CollectionText], [CollectionImage], [DoctorId], [CollectionAudio], [CategoryId]) VALUES (1026, N'Word', N'Melon', N'Images/49006d54-6278-47fd-bd61-8cea22545f58_3412.jpg', 1, N'Images/d5c7ad42-0a2a-4327-9850-dc8011ac3b7d_3803.mp3', 3)
INSERT [dbo].[Collections] ([CollectionId], [CollectionType], [CollectionText], [CollectionImage], [DoctorId], [CollectionAudio], [CategoryId]) VALUES (1027, N'Word', N'Grapes', N'Images/c1281485-9d08-4ccd-a264-a0c5eba0e533_3437.jpg', 1, N'Images/71aaf50d-ae09-4b33-8f99-34055996670f_3819.mp3', 3)
INSERT [dbo].[Collections] ([CollectionId], [CollectionType], [CollectionText], [CollectionImage], [DoctorId], [CollectionAudio], [CategoryId]) VALUES (1028, N'Sentence', N'Book on table', N'Images/06a67293-b7c3-458f-9fdc-27be56bf2920_3456.gif', 1, N'Images/7e2956a5-27d7-41ef-ae31-7539decf533b_3829.mp3', 0)
INSERT [dbo].[Collections] ([CollectionId], [CollectionType], [CollectionText], [CollectionImage], [DoctorId], [CollectionAudio], [CategoryId]) VALUES (1029, N'Sentence', N'It is raining', N'Images/46c6fce4-050f-4bf6-b5b3-af3a4072f4f4_3510.jpg', 1, N'Images/a4a7c1ae-2bbc-4573-947d-ad4f6f3d5381_0354.mp3', 0)
INSERT [dbo].[Collections] ([CollectionId], [CollectionType], [CollectionText], [CollectionImage], [DoctorId], [CollectionAudio], [CategoryId]) VALUES (1030, N'Letter', N'D', N'Images/99dd7a58-a979-4aab-bc5f-bfd2fa263ad0_3929.jpg', 1, N'Images/4f8b5b5f-16cc-4ce5-9017-02e18b38d788_3633.mp3', 0)
INSERT [dbo].[Collections] ([CollectionId], [CollectionType], [CollectionText], [CollectionImage], [DoctorId], [CollectionAudio], [CategoryId]) VALUES (1031, N'Letter', N'E', N'Images/323b9c71-34c3-4a54-b8e0-f1c2f1bac919_3943.jpg', 1, N'Images/5691c680-db69-429f-8547-3090436c79a3_3644.mp3', 0)
INSERT [dbo].[Collections] ([CollectionId], [CollectionType], [CollectionText], [CollectionImage], [DoctorId], [CollectionAudio], [CategoryId]) VALUES (1032, N'Letter', N'G', N'Images/307a31cf-8686-4ec9-b6d4-c9be6b92f675_3953.jpg', 1, N'Images/1f0f6bbd-5316-4b8f-8de9-432e464a582e_3654.mp3', 0)
INSERT [dbo].[Collections] ([CollectionId], [CollectionType], [CollectionText], [CollectionImage], [DoctorId], [CollectionAudio], [CategoryId]) VALUES (1033, N'Word', N'Flowers', N'Images/438a3871-a487-45bf-8167-4f0ecbd8a4c0_1117.jpg', 1, N'Images/5382432d-67a0-4c6b-8d44-73222ec5784d_4028.mp3', 3)
INSERT [dbo].[Collections] ([CollectionId], [CollectionType], [CollectionText], [CollectionImage], [DoctorId], [CollectionAudio], [CategoryId]) VALUES (1035, N'Word', N'Bag', N'Images/b0e23911-7faf-4a5b-9b84-3e5fac18504c_5036.PNG', 1, N'Images/c2a8f35a-a9e8-4fdc-8bfb-026466b37a7c_4037.mp3', 3)
INSERT [dbo].[Collections] ([CollectionId], [CollectionType], [CollectionText], [CollectionImage], [DoctorId], [CollectionAudio], [CategoryId]) VALUES (1036, N'Word', N'Note Books', N'Images/38241365-c4c6-4fc1-a34e-e75b425ac542_5107.PNG', 1, N'Images/89d20a4a-7fb3-4924-9a8d-0244ab2414fe_4105.mp3', 3)
INSERT [dbo].[Collections] ([CollectionId], [CollectionType], [CollectionText], [CollectionImage], [DoctorId], [CollectionAudio], [CategoryId]) VALUES (1037, N'Word', N'Black Board', N'Images/4ccb4954-5169-4c05-aae7-365bb677d4f7_5125.PNG', 1, N'Images/a4a7c1ae-2bbc-4573-947d-ad4f6f3d5381_0354.mp3', 3)
INSERT [dbo].[Collections] ([CollectionId], [CollectionType], [CollectionText], [CollectionImage], [DoctorId], [CollectionAudio], [CategoryId]) VALUES (1038, N'Word', N'Chair', N'Images/901c7f80-63a9-492d-bf8e-692aad865a7c_5146.jpg', 1, N'Images/a4a7c1ae-2bbc-4573-947d-ad4f6f3d5381_0354.mp3', 3)
INSERT [dbo].[Collections] ([CollectionId], [CollectionType], [CollectionText], [CollectionImage], [DoctorId], [CollectionAudio], [CategoryId]) VALUES (1039, N'Word', N'Class Room', N'Images/23177a54-29e1-4bd5-933c-ed9e782defb7_0648.PNG', 1, N'Images/a4a7c1ae-2bbc-4573-947d-ad4f6f3d5381_0354.mp3', 3)
INSERT [dbo].[Collections] ([CollectionId], [CollectionType], [CollectionText], [CollectionImage], [DoctorId], [CollectionAudio], [CategoryId]) VALUES (1040, N'Word', N'Desk', N'Images/09037722-0169-45b2-9a0a-e3f468df0c40_0712.jpg', 1, N'Images/b21d5c8d-3811-4237-b7c8-66d2ce5a80c3_4206.mp3', 3)
INSERT [dbo].[Collections] ([CollectionId], [CollectionType], [CollectionText], [CollectionImage], [DoctorId], [CollectionAudio], [CategoryId]) VALUES (1041, N'Word', N'Eraser', N'Images/e9d4e832-d9c6-47ba-8aad-42627357fc52_0726.PNG', 1, N'Images/2ba7e37b-a8da-4d8d-9bd5-1aed271a8a41_0323.mp3', 3)
INSERT [dbo].[Collections] ([CollectionId], [CollectionType], [CollectionText], [CollectionImage], [DoctorId], [CollectionAudio], [CategoryId]) VALUES (1042, N'Word', N'ink', N'Images/3245ae7a-8898-4545-a2cc-d4e0e4641ff0_0743.PNG', 1, N'Images/7ad8ea12-9a58-422b-90e8-4f2bf0755ba2_4239.mp3', 3)
INSERT [dbo].[Collections] ([CollectionId], [CollectionType], [CollectionText], [CollectionImage], [DoctorId], [CollectionAudio], [CategoryId]) VALUES (1043, N'Word', N'Pen', N'Images/e557b056-1ee9-4688-9c60-5bb5cf64eb9d_0809.jpg', 1, N'Images/74e320c3-78f1-4fe0-bb3d-a6c9d00ecf77_4254.mp3', 3)
INSERT [dbo].[Collections] ([CollectionId], [CollectionType], [CollectionText], [CollectionImage], [DoctorId], [CollectionAudio], [CategoryId]) VALUES (1044, N'Word', N'Pencil Box', N'Images/5059b6d3-9339-4043-87da-288cea814c19_0825.PNG', 1, N'Images/ece884a6-e1f2-41d4-a986-e262f332566d_4312.mp3', 3)
INSERT [dbo].[Collections] ([CollectionId], [CollectionType], [CollectionText], [CollectionImage], [DoctorId], [CollectionAudio], [CategoryId]) VALUES (1045, N'Word', N'Pencils', N'Images/a1f00b8e-3267-4cad-aeea-cc97768300bc_0837.jpg', 1, N'Images/6e20d051-b482-44f5-8ac2-a5bde77393f0_4329.mp3', 3)
INSERT [dbo].[Collections] ([CollectionId], [CollectionType], [CollectionText], [CollectionImage], [DoctorId], [CollectionAudio], [CategoryId]) VALUES (1046, N'Word', N'Sharpners', N'Images/a31ef66c-339c-4ddb-97a4-b29740b45afb_0852.PNG', 1, N'Images/6f2ddc58-059e-4658-88be-b026836dceb9_4346.mp3', 3)
INSERT [dbo].[Collections] ([CollectionId], [CollectionType], [CollectionText], [CollectionImage], [DoctorId], [CollectionAudio], [CategoryId]) VALUES (1047, N'Word', N'White Board', N'Images/b80a78bf-9331-490f-98c6-906a8116bffb_0911.jpg', 1, N'Images/a4a7c1ae-2bbc-4573-947d-ad4f6f3d5381_0354.mp3', 3)
INSERT [dbo].[Collections] ([CollectionId], [CollectionType], [CollectionText], [CollectionImage], [DoctorId], [CollectionAudio], [CategoryId]) VALUES (1048, N'Word', N'Camel', N'Images/d8d889fb-b8e6-4fc3-a296-4b35dc3d08f9_0705.jpg', 1, N'Images/3e1bddbf-91ed-4cf2-9a20-ed04061267f3_4400.mp3', 3)
INSERT [dbo].[Collections] ([CollectionId], [CollectionType], [CollectionText], [CollectionImage], [DoctorId], [CollectionAudio], [CategoryId]) VALUES (1049, N'Word', N'Cat', N'Images/2f0e49ea-2e65-4d67-9767-35521e2a374b_0720.jpg', 1, N'Images/6a23e612-080e-4f8f-b910-702728c12a9a_4415.mp3', 3)
INSERT [dbo].[Collections] ([CollectionId], [CollectionType], [CollectionText], [CollectionImage], [DoctorId], [CollectionAudio], [CategoryId]) VALUES (1050, N'Word', N'Cheetah', N'Images/8d2cc825-2c41-47bf-8615-e6128528b666_0736.PNG', 1, N'Images/7d9b999d-f105-4ca6-9914-ea65ade204aa_4448.mp3', 3)
INSERT [dbo].[Collections] ([CollectionId], [CollectionType], [CollectionText], [CollectionImage], [DoctorId], [CollectionAudio], [CategoryId]) VALUES (1051, N'Word', N'Cow', N'Images/a94a4847-3ba6-4ce7-8bba-b9fdc5bde94c_0747.jpg', 1, N'Images/bf182c3a-d8ec-4883-a8a7-92753b61dbd4_4501.mp3', 3)
INSERT [dbo].[Collections] ([CollectionId], [CollectionType], [CollectionText], [CollectionImage], [DoctorId], [CollectionAudio], [CategoryId]) VALUES (1052, N'Word', N'Dog', N'Images/122c2c58-9d7a-48b6-9ceb-3a7448f16e65_1157.jpg', 1, N'Images/c990a0fa-d28d-4bfd-8c15-eb25c30b678b_4653.mp3', 3)
INSERT [dbo].[Collections] ([CollectionId], [CollectionType], [CollectionText], [CollectionImage], [DoctorId], [CollectionAudio], [CategoryId]) VALUES (1053, N'Word', N'Donkey', N'Images/76db8b84-102b-4840-a2e1-d60fe069678a_1219.jpg', 1, N'Images/b7898e8d-5666-4557-99cf-ff93e48d71f4_5538.mp3', 3)
INSERT [dbo].[Collections] ([CollectionId], [CollectionType], [CollectionText], [CollectionImage], [DoctorId], [CollectionAudio], [CategoryId]) VALUES (1054, N'Word', N'Elephant', N'Images/4603a7b8-a0ee-4dbf-b7dd-26571caed231_1232.PNG', 1, N'Images/f230f37d-31bd-48d4-8b00-89223f559517_5627.mp3', 3)
INSERT [dbo].[Collections] ([CollectionId], [CollectionType], [CollectionText], [CollectionImage], [DoctorId], [CollectionAudio], [CategoryId]) VALUES (1055, N'Word', N'Goat', N'Images/d7273921-f990-43b9-9ef2-dabc7d75923f_1240.jpg', 1, N'Images/5259cebe-6b05-41be-a5d2-62cf4d60cd97_5647.mp3', 3)
INSERT [dbo].[Collections] ([CollectionId], [CollectionType], [CollectionText], [CollectionImage], [DoctorId], [CollectionAudio], [CategoryId]) VALUES (1056, N'Word', N'Lion', N'Images/25ce64b2-5b07-45e8-85c6-38deb8c02549_1250.jpg', 1, N'Images/452e31ba-bb48-40eb-b028-493df848a32f_0033.mp3', 3)
INSERT [dbo].[Collections] ([CollectionId], [CollectionType], [CollectionText], [CollectionImage], [DoctorId], [CollectionAudio], [CategoryId]) VALUES (1057, N'Word', N'Rabbit', N'Images/7833d78e-a593-4cfa-8d5b-4295b5ac6043_1303.jpg', 1, N'Images/77caef2d-b648-4f3c-abcc-eae39c870747_0120.mp3', 3)
INSERT [dbo].[Collections] ([CollectionId], [CollectionType], [CollectionText], [CollectionImage], [DoctorId], [CollectionAudio], [CategoryId]) VALUES (1058, N'Word', N'Zeebra', N'Images/28c2a6a4-e96b-49eb-9044-8c9c46dba7b0_1321.jpg', 1, N'Images/d1b427ba-9500-47f3-b719-67eb146df304_0135.mp3', 3)
INSERT [dbo].[Collections] ([CollectionId], [CollectionType], [CollectionText], [CollectionImage], [DoctorId], [CollectionAudio], [CategoryId]) VALUES (1059, N'Word', N'Bat', N'Images/bcd46ec5-78f1-4bac-bf40-58cae5e8a297_3044.PNG', 1, N'Images/e84a89a3-8ce2-4e14-96d9-d0217482c3b3_0145.mp3', 3)
INSERT [dbo].[Collections] ([CollectionId], [CollectionType], [CollectionText], [CollectionImage], [DoctorId], [CollectionAudio], [CategoryId]) VALUES (1060, N'Word', N'Crane', N'Images/07014e71-3d36-4b26-a56f-4a5d192a8d14_3053.PNG', 1, N'Images/dd2a3895-c13f-4429-b756-ee39c2878df9_0158.mp3', 3)
INSERT [dbo].[Collections] ([CollectionId], [CollectionType], [CollectionText], [CollectionImage], [DoctorId], [CollectionAudio], [CategoryId]) VALUES (1061, N'Word', N'Crow', N'Images/93d084a5-6dd7-40c6-90c4-eab695146422_3104.PNG', 1, N'Images/4414d646-36fe-4142-a5e2-d92ddbe93ee4_0221.mp3', 3)
INSERT [dbo].[Collections] ([CollectionId], [CollectionType], [CollectionText], [CollectionImage], [DoctorId], [CollectionAudio], [CategoryId]) VALUES (1062, N'Word', N'Duck', N'Images/75b567eb-6b88-4ab6-a6ea-a0cc08abdeca_3116.PNG', 1, N'Images/f962a0c3-73c7-4e7d-92b4-f21847f8f46a_0239.mp3', 3)
INSERT [dbo].[Collections] ([CollectionId], [CollectionType], [CollectionText], [CollectionImage], [DoctorId], [CollectionAudio], [CategoryId]) VALUES (1063, N'Word', N'Falcon', N'Images/9975a96d-6417-49d5-b729-26c890b6dc37_3128.png', 1, N'Images/bf93a15b-99a6-4cba-8a56-522ea4d4be90_0302.mp3', 3)
INSERT [dbo].[Collections] ([CollectionId], [CollectionType], [CollectionText], [CollectionImage], [DoctorId], [CollectionAudio], [CategoryId]) VALUES (1064, N'Word', N'Goose', N'Images/957080b0-3538-46d9-9ff4-5a36e66166e6_3138.PNG', 1, N'Images/b3cbd9e9-8954-4dc4-a927-65fa33a73737_0342.mp3', 3)
INSERT [dbo].[Collections] ([CollectionId], [CollectionType], [CollectionText], [CollectionImage], [DoctorId], [CollectionAudio], [CategoryId]) VALUES (1065, N'Word', N'Hen', N'Images/5b6c67e3-47a8-43c1-bb1a-82ca7076c5ba_3147.jpg', 1, N'Images/55d14a79-4703-405b-88d8-d93d29536a34_0356.mp3', 3)
INSERT [dbo].[Collections] ([CollectionId], [CollectionType], [CollectionText], [CollectionImage], [DoctorId], [CollectionAudio], [CategoryId]) VALUES (1066, N'Word', N'PeeCock', N'Images/8dc30fc8-a85e-40cb-b819-5b22c6ab0825_3204.jpg', 1, N'Images/5c0e5ab9-3f7e-4668-8bb2-1c0b73c6cc4e_0415.mp3', 3)
INSERT [dbo].[Collections] ([CollectionId], [CollectionType], [CollectionText], [CollectionImage], [DoctorId], [CollectionAudio], [CategoryId]) VALUES (1067, N'Word', N'Perot', N'Images/d5576129-3e72-4c7e-845d-20732ae3b7be_3216.jpg', 1, N'Images/2178c8f3-93f9-4c7c-8e54-a5f33ea704f9_0440.mp3', 3)
INSERT [dbo].[Collections] ([CollectionId], [CollectionType], [CollectionText], [CollectionImage], [DoctorId], [CollectionAudio], [CategoryId]) VALUES (1068, N'Word', N'Pigeon', N'Images/6f552ddc-eb52-49bf-9f8f-8154e9cfa7a5_3229.PNG', 1, N'Images/4e7e014c-2267-4864-aa89-48676901bbae_0502.mp3', 3)
INSERT [dbo].[Collections] ([CollectionId], [CollectionType], [CollectionText], [CollectionImage], [DoctorId], [CollectionAudio], [CategoryId]) VALUES (1069, N'Word', N'Rooster', N'Images/d1d7d389-e5d1-4bb7-ac36-4acf3c31305d_3239.jpg', 1, N'Images/d609d9b0-e39c-41b5-94ac-b77de37993f6_0521.mp3', 3)
INSERT [dbo].[Collections] ([CollectionId], [CollectionType], [CollectionText], [CollectionImage], [DoctorId], [CollectionAudio], [CategoryId]) VALUES (1070, N'Word', N'Sparrow', N'Images/3405f899-375c-4c40-a257-86e2768bcceb_3252.jpg', 1, N'Images/2a89112c-b54f-4edb-a720-8f2bdc89d97d_0534.mp3', 3)
INSERT [dbo].[Collections] ([CollectionId], [CollectionType], [CollectionText], [CollectionImage], [DoctorId], [CollectionAudio], [CategoryId]) VALUES (1071, N'Word', N'Swallow', N'Images/1b9b5cd1-2a3e-4dd6-99dd-addd0a768be1_3304.PNG', 1, N'Images/9075af31-4a4f-42d2-863f-a55dc51716a3_0617.mp3', 3)
INSERT [dbo].[Collections] ([CollectionId], [CollectionType], [CollectionText], [CollectionImage], [DoctorId], [CollectionAudio], [CategoryId]) VALUES (1072, N'Letter', N'K', N'Images/62083b15-4d48-4b6c-9184-faa0d34b934f_2219.png', 1, N'Images/e3f845fa-7ccc-4e81-a38f-eac94562dc49_0556.mp3', 0)
INSERT [dbo].[Collections] ([CollectionId], [CollectionType], [CollectionText], [CollectionImage], [DoctorId], [CollectionAudio], [CategoryId]) VALUES (1073, N'Sentence', N'Book On Table', N'Images/743c2d05-babf-4db6-aa75-22a92e48d278_2204.png', 1, N'Images/866919d8-5247-4b4f-8713-eeefda00575d_0700.mp3', 0)
INSERT [dbo].[Collections] ([CollectionId], [CollectionType], [CollectionText], [CollectionImage], [DoctorId], [CollectionAudio], [CategoryId]) VALUES (1074, N'Sentence', N'Child is going for Shoping', N'Images/230b3984-73c2-4a04-8a2b-4d60cdf51984_1745.jpg', 1, N'Images/a4a7c1ae-2bbc-4573-947d-ad4f6f3d5381_0354.mp3', 0)
INSERT [dbo].[Collections] ([CollectionId], [CollectionType], [CollectionText], [CollectionImage], [DoctorId], [CollectionAudio], [CategoryId]) VALUES (1075, N'Sentence', N'girl going to home', N'Images/65090c4f-afdc-4882-8498-94f1292166ba_1818.PNG', 1, N'Images/a4a7c1ae-2bbc-4573-947d-ad4f6f3d5381_0354.mp3', 0)
INSERT [dbo].[Collections] ([CollectionId], [CollectionType], [CollectionText], [CollectionImage], [DoctorId], [CollectionAudio], [CategoryId]) VALUES (1076, N'Sentence', N'girl going to hospital', N'Images/aef23a7d-bf18-4de6-b5ac-23673cd79422_1844.jpg', 1, N'Images/a4a7c1ae-2bbc-4573-947d-ad4f6f3d5381_0354.mp3', 0)
INSERT [dbo].[Collections] ([CollectionId], [CollectionType], [CollectionText], [CollectionImage], [DoctorId], [CollectionAudio], [CategoryId]) VALUES (1077, N'Sentence', N'students going to school', N'Images/df276099-eb3b-458e-8963-ce492d4359e5_1930.PNG', 1, N'Images/a4a7c1ae-2bbc-4573-947d-ad4f6f3d5381_0354.mp3', 0)
INSERT [dbo].[Collections] ([CollectionId], [CollectionType], [CollectionText], [CollectionImage], [DoctorId], [CollectionAudio], [CategoryId]) VALUES (1078, N'Sentence', N'girl eating burger', N'Images/d787030f-4a1c-4dfd-904e-d0e3e9b86ec8_2003.jpg', 1, N'Images/a4a7c1ae-2bbc-4573-947d-ad4f6f3d5381_0354.mp3', 0)
INSERT [dbo].[Collections] ([CollectionId], [CollectionType], [CollectionText], [CollectionImage], [DoctorId], [CollectionAudio], [CategoryId]) VALUES (1079, N'Sentence', N'girl eating ice cream', N'Images/2d791211-8c39-4302-aec7-5c3ca3547f09_2025.jpg', 1, N'Images/a4a7c1ae-2bbc-4573-947d-ad4f6f3d5381_0354.mp3', 0)
INSERT [dbo].[Collections] ([CollectionId], [CollectionType], [CollectionText], [CollectionImage], [DoctorId], [CollectionAudio], [CategoryId]) VALUES (1080, N'Sentence', N'girl eating mango', N'Images/22b0a23b-5a71-4f06-9823-2f03d62297b3_2044.jpg', 1, N'Images/a4a7c1ae-2bbc-4573-947d-ad4f6f3d5381_0354.mp3', 0)
INSERT [dbo].[Collections] ([CollectionId], [CollectionType], [CollectionText], [CollectionImage], [DoctorId], [CollectionAudio], [CategoryId]) VALUES (1081, N'Sentence', N'girl eating pizza', N'Images/6a04cda0-55af-4c64-84b7-0f9099bf1d7b_2139.jpg', 1, N'Images/a4a7c1ae-2bbc-4573-947d-ad4f6f3d5381_0354.mp3', 0)
INSERT [dbo].[Collections] ([CollectionId], [CollectionType], [CollectionText], [CollectionImage], [DoctorId], [CollectionAudio], [CategoryId]) VALUES (1082, N'Sentence', N'glass on table', N'Images/2745f526-a0cf-4e32-8c78-0337c2031d7c_2203.jpg', 1, N'Images/a4a7c1ae-2bbc-4573-947d-ad4f6f3d5381_0354.mp3', 0)
INSERT [dbo].[Collections] ([CollectionId], [CollectionType], [CollectionText], [CollectionImage], [DoctorId], [CollectionAudio], [CategoryId]) VALUES (1083, N'Sentence', N'jug on table', N'Images/8d16d859-0518-4e61-ae09-9f11a2b15cbe_2231.jpg', 1, N'Images/a4a7c1ae-2bbc-4573-947d-ad4f6f3d5381_0354.mp3', 0)
INSERT [dbo].[Collections] ([CollectionId], [CollectionType], [CollectionText], [CollectionImage], [DoctorId], [CollectionAudio], [CategoryId]) VALUES (1084, N'Sentence', N'shoes on table', N'Images/7ad222cd-35a8-4cb7-bad8-b68f6075161b_2250.jpg', 1, N'Images/a4a7c1ae-2bbc-4573-947d-ad4f6f3d5381_0354.mp3', 0)
INSERT [dbo].[Collections] ([CollectionId], [CollectionType], [CollectionText], [CollectionImage], [DoctorId], [CollectionAudio], [CategoryId]) VALUES (1085, N'Sentence', N'girl playing Hockey', N'Images/7335b8a0-1574-4788-a3db-ea359a9e6dcf_2943.jpg', 1, N'Images/a4a7c1ae-2bbc-4573-947d-ad4f6f3d5381_0354.mp3', 0)
INSERT [dbo].[Collections] ([CollectionId], [CollectionType], [CollectionText], [CollectionImage], [DoctorId], [CollectionAudio], [CategoryId]) VALUES (1086, N'Sentence', N'girl playing football', N'Images/1a5e6d34-ebf7-4d50-ab49-88fd8907d7f7_2959.jpg', 1, N'Images/a4a7c1ae-2bbc-4573-947d-ad4f6f3d5381_0354.mp3', 0)
INSERT [dbo].[Collections] ([CollectionId], [CollectionType], [CollectionText], [CollectionImage], [DoctorId], [CollectionAudio], [CategoryId]) VALUES (1087, N'Sentence', N'girl playing basketball', N'Images/d2abe92e-244a-4674-bdec-9a1479a1e3b0_3022.jpg', 1, N'Images/a4a7c1ae-2bbc-4573-947d-ad4f6f3d5381_0354.mp3', 0)
INSERT [dbo].[Collections] ([CollectionId], [CollectionType], [CollectionText], [CollectionImage], [DoctorId], [CollectionAudio], [CategoryId]) VALUES (1088, N'Sentence', N'girl playing cricket', N'Images/824f9242-c190-4492-ada3-7283b3d4a2bc_3044.jpg', 1, N'Images/a4a7c1ae-2bbc-4573-947d-ad4f6f3d5381_0354.mp3', 0)
INSERT [dbo].[Collections] ([CollectionId], [CollectionType], [CollectionText], [CollectionImage], [DoctorId], [CollectionAudio], [CategoryId]) VALUES (1089, N'Sentence', N'man watching road', N'Images/a566cb24-8d9a-4a53-a8c6-f5f66f6f88d2_3204.jpg', 1, N'Images/a4a7c1ae-2bbc-4573-947d-ad4f6f3d5381_0354.mp3', 0)
INSERT [dbo].[Collections] ([CollectionId], [CollectionType], [CollectionText], [CollectionImage], [DoctorId], [CollectionAudio], [CategoryId]) VALUES (1090, N'Sentence', N'girl watching sea', N'Images/1ada2a2a-e2fd-4239-8e80-bac087654ebe_3230.PNG', 1, N'Images/a4a7c1ae-2bbc-4573-947d-ad4f6f3d5381_0354.mp3', 0)
INSERT [dbo].[Collections] ([CollectionId], [CollectionType], [CollectionText], [CollectionImage], [DoctorId], [CollectionAudio], [CategoryId]) VALUES (1091, N'Sentence', N'child watching Tv', N'Images/cc55079d-b64e-48f4-a519-9aca29c5e98b_3305.jpg', 1, N'Images/a4a7c1ae-2bbc-4573-947d-ad4f6f3d5381_0354.mp3', 0)
INSERT [dbo].[Collections] ([CollectionId], [CollectionType], [CollectionText], [CollectionImage], [DoctorId], [CollectionAudio], [CategoryId]) VALUES (1092, N'Sentence', N'it is snowing', N'Images/999e7664-9b3a-49f5-be8b-2e37b75a68b1_3355.jpg', 1, N'Images/a4a7c1ae-2bbc-4573-947d-ad4f6f3d5381_0354.mp3', 0)
INSERT [dbo].[Collections] ([CollectionId], [CollectionType], [CollectionText], [CollectionImage], [DoctorId], [CollectionAudio], [CategoryId]) VALUES (1093, N'Word', N'Broccoli', N'Images/f34aa343-ffa0-430d-a3ed-06e5343abe98_4420.png', 1, N'Images/a4a7c1ae-2bbc-4573-947d-ad4f6f3d5381_0354.mp3', 3)
INSERT [dbo].[Collections] ([CollectionId], [CollectionType], [CollectionText], [CollectionImage], [DoctorId], [CollectionAudio], [CategoryId]) VALUES (1094, N'Word', N'Carrot', N'Images/ce49e9a5-f828-417e-838e-f0ddd409ad90_4446.png', 1, N'Images/a4a7c1ae-2bbc-4573-947d-ad4f6f3d5381_0354.mp3', 3)
INSERT [dbo].[Collections] ([CollectionId], [CollectionType], [CollectionText], [CollectionImage], [DoctorId], [CollectionAudio], [CategoryId]) VALUES (1095, N'Word', N'Cauliflower', N'Images/e5d11a3a-041a-4888-b508-8e3377d1ea4c_4510.png', 1, N'Images/a4a7c1ae-2bbc-4573-947d-ad4f6f3d5381_0354.mp3', 3)
INSERT [dbo].[Collections] ([CollectionId], [CollectionType], [CollectionText], [CollectionImage], [DoctorId], [CollectionAudio], [CategoryId]) VALUES (1096, N'Word', N'Celery', N'Images/e717b3ea-5656-4f73-b1d7-52e091df6862_4535.png', 1, N'Images/a4a7c1ae-2bbc-4573-947d-ad4f6f3d5381_0354.mp3', 3)
INSERT [dbo].[Collections] ([CollectionId], [CollectionType], [CollectionText], [CollectionImage], [DoctorId], [CollectionAudio], [CategoryId]) VALUES (1097, N'Word', N'Corn', N'Images/3f2eb790-4966-4bf8-9977-f0974a78a31f_4550.png', 1, N'Images/a4a7c1ae-2bbc-4573-947d-ad4f6f3d5381_0354.mp3', 3)
INSERT [dbo].[Collections] ([CollectionId], [CollectionType], [CollectionText], [CollectionImage], [DoctorId], [CollectionAudio], [CategoryId]) VALUES (1098, N'Word', N'Garlic', N'Images/37297591-2f1b-4871-9f87-895ee5e03494_4605.png', 1, N'Images/a4a7c1ae-2bbc-4573-947d-ad4f6f3d5381_0354.mp3', 3)
INSERT [dbo].[Collections] ([CollectionId], [CollectionType], [CollectionText], [CollectionImage], [DoctorId], [CollectionAudio], [CategoryId]) VALUES (1099, N'Word', N'Green Peeper', N'Images/6784fd49-ccd9-4f47-ab83-4699a9872ec9_4623.png', 1, N'Images/a4a7c1ae-2bbc-4573-947d-ad4f6f3d5381_0354.mp3', 3)
INSERT [dbo].[Collections] ([CollectionId], [CollectionType], [CollectionText], [CollectionImage], [DoctorId], [CollectionAudio], [CategoryId]) VALUES (1100, N'Word', N'Mushroom', N'Images/465749f9-e0c9-4a2a-b9f7-c8a5616476c5_4639.png', 1, N'Images/a4a7c1ae-2bbc-4573-947d-ad4f6f3d5381_0354.mp3', 3)
INSERT [dbo].[Collections] ([CollectionId], [CollectionType], [CollectionText], [CollectionImage], [DoctorId], [CollectionAudio], [CategoryId]) VALUES (1101, N'Word', N'Onion', N'Images/eb604eab-7f72-4084-92db-632c6cb7c373_4654.png', 1, N'Images/a4a7c1ae-2bbc-4573-947d-ad4f6f3d5381_0354.mp3', 3)
INSERT [dbo].[Collections] ([CollectionId], [CollectionType], [CollectionText], [CollectionImage], [DoctorId], [CollectionAudio], [CategoryId]) VALUES (1102, N'Word', N'Red Peeper', N'Images/3e2625b3-c017-4f4e-a39f-c33efb640f54_4718.png', 1, N'Images/a4a7c1ae-2bbc-4573-947d-ad4f6f3d5381_0354.mp3', 3)
INSERT [dbo].[Collections] ([CollectionId], [CollectionType], [CollectionText], [CollectionImage], [DoctorId], [CollectionAudio], [CategoryId]) VALUES (1103, N'Word', N'Tomato', N'Images/b7310143-4860-42f8-87e8-17c145a4729c_4734.png', 1, N'Images/a4a7c1ae-2bbc-4573-947d-ad4f6f3d5381_0354.mp3', 3)
INSERT [dbo].[Collections] ([CollectionId], [CollectionType], [CollectionText], [CollectionImage], [DoctorId], [CollectionAudio], [CategoryId]) VALUES (1104, N'Word', N'Radish', N'Images/f36d3e38-26a3-486f-8394-7a91106edf44_4804.png', 1, N'Images/a4a7c1ae-2bbc-4573-947d-ad4f6f3d5381_0354.mp3', 3)
INSERT [dbo].[Collections] ([CollectionId], [CollectionType], [CollectionText], [CollectionImage], [DoctorId], [CollectionAudio], [CategoryId]) VALUES (1105, N'Word', N'Air Conditioner', N'Images/a5ee77f1-2aab-419c-bcad-f62cb4f6009a_5240.png', 1, N'Images/a4a7c1ae-2bbc-4573-947d-ad4f6f3d5381_0354.mp3', 3)
INSERT [dbo].[Collections] ([CollectionId], [CollectionType], [CollectionText], [CollectionImage], [DoctorId], [CollectionAudio], [CategoryId]) VALUES (1106, N'Word', N'Air Purifier', N'Images/019b1031-3bec-47f7-b75a-73e3e87a5cae_5308.png', 1, N'Images/a4a7c1ae-2bbc-4573-947d-ad4f6f3d5381_0354.mp3', 3)
INSERT [dbo].[Collections] ([CollectionId], [CollectionType], [CollectionText], [CollectionImage], [DoctorId], [CollectionAudio], [CategoryId]) VALUES (1107, N'Word', N'Alarm Clock', N'Images/693673bc-a82a-488c-b0e6-79001f9801e5_5340.jpg', 1, N'Images/a4a7c1ae-2bbc-4573-947d-ad4f6f3d5381_0354.mp3', 3)
INSERT [dbo].[Collections] ([CollectionId], [CollectionType], [CollectionText], [CollectionImage], [DoctorId], [CollectionAudio], [CategoryId]) VALUES (1108, N'Word', N'Backup Charger', N'Images/61adf0d8-ad5b-4ea9-af51-9dab52c7a989_5553.jpg', 1, N'Images/a4a7c1ae-2bbc-4573-947d-ad4f6f3d5381_0354.mp3', 3)
INSERT [dbo].[Collections] ([CollectionId], [CollectionType], [CollectionText], [CollectionImage], [DoctorId], [CollectionAudio], [CategoryId]) VALUES (1109, N'Word', N'BankNote Counter', N'Images/073a3194-b1ac-4914-b1fc-f6b97693b66d_5616.jpg', 1, N'Images/a4a7c1ae-2bbc-4573-947d-ad4f6f3d5381_0354.mp3', 3)
INSERT [dbo].[Collections] ([CollectionId], [CollectionType], [CollectionText], [CollectionImage], [DoctorId], [CollectionAudio], [CategoryId]) VALUES (1110, N'Word', N'Blender', N'Images/3250e07c-f024-4cba-ad61-dd07bde2e50b_5634.png', 1, N'Images/a4a7c1ae-2bbc-4573-947d-ad4f6f3d5381_0354.mp3', 3)
INSERT [dbo].[Collections] ([CollectionId], [CollectionType], [CollectionText], [CollectionImage], [DoctorId], [CollectionAudio], [CategoryId]) VALUES (1111, N'Word', N'Bluetooth Speaker', N'Images/880fba0c-4416-42cc-ba36-0dc74ad1a6a5_5657.jpg', 1, N'Images/a4a7c1ae-2bbc-4573-947d-ad4f6f3d5381_0354.mp3', 3)
INSERT [dbo].[Collections] ([CollectionId], [CollectionType], [CollectionText], [CollectionImage], [DoctorId], [CollectionAudio], [CategoryId]) VALUES (1112, N'Word', N'Bread Maker', N'Images/53f1ae40-28cd-4220-8a8d-a48e283208b8_5731.png', 1, N'Images/a4a7c1ae-2bbc-4573-947d-ad4f6f3d5381_0354.mp3', 3)
INSERT [dbo].[Collections] ([CollectionId], [CollectionType], [CollectionText], [CollectionImage], [DoctorId], [CollectionAudio], [CategoryId]) VALUES (1113, N'Word', N'Bulb', N'Images/a7ace715-e290-480b-8702-44c439b7d384_5748.png', 1, N'Images/a4a7c1ae-2bbc-4573-947d-ad4f6f3d5381_0354.mp3', 3)
INSERT [dbo].[Collections] ([CollectionId], [CollectionType], [CollectionText], [CollectionImage], [DoctorId], [CollectionAudio], [CategoryId]) VALUES (1114, N'Word', N'Calculator', N'Images/a4af27e2-b46c-4619-8102-92e0bb371438_5804.jpg', 1, N'Images/a4a7c1ae-2bbc-4573-947d-ad4f6f3d5381_0354.mp3', 3)
INSERT [dbo].[Collections] ([CollectionId], [CollectionType], [CollectionText], [CollectionImage], [DoctorId], [CollectionAudio], [CategoryId]) VALUES (1115, N'Word', N'Clock', N'Images/e8ad592f-9504-45c8-b20c-dafa62776781_5825.png', 1, N'Images/a4a7c1ae-2bbc-4573-947d-ad4f6f3d5381_0354.mp3', 3)
INSERT [dbo].[Collections] ([CollectionId], [CollectionType], [CollectionText], [CollectionImage], [DoctorId], [CollectionAudio], [CategoryId]) VALUES (1116, N'Word', N'Brightener', N'Images/9f9d998d-62b1-4e5e-b59e-c06fd9d57f35_0125.png', 1, N'Images/a4a7c1ae-2bbc-4573-947d-ad4f6f3d5381_0354.mp3', 3)
INSERT [dbo].[Collections] ([CollectionId], [CollectionType], [CollectionText], [CollectionImage], [DoctorId], [CollectionAudio], [CategoryId]) VALUES (1117, N'Word', N'Brushes', N'Images/91194bff-fa32-4bc6-b087-58b5daf78114_0200.png', 1, N'Images/a4a7c1ae-2bbc-4573-947d-ad4f6f3d5381_0354.mp3', 3)
INSERT [dbo].[Collections] ([CollectionId], [CollectionType], [CollectionText], [CollectionImage], [DoctorId], [CollectionAudio], [CategoryId]) VALUES (1118, N'Word', N'Cleanser', N'Images/c809a255-ed0e-4444-9630-c495013851f9_0220.png', 1, N'Images/a4a7c1ae-2bbc-4573-947d-ad4f6f3d5381_0354.mp3', 3)
INSERT [dbo].[Collections] ([CollectionId], [CollectionType], [CollectionText], [CollectionImage], [DoctorId], [CollectionAudio], [CategoryId]) VALUES (1119, N'Word', N'Eyeshadow', N'Images/3512f559-1274-4d35-aef6-0077e7cbe95e_0239.png', 1, N'Images/a4a7c1ae-2bbc-4573-947d-ad4f6f3d5381_0354.mp3', 3)
GO
INSERT [dbo].[Collections] ([CollectionId], [CollectionType], [CollectionText], [CollectionImage], [DoctorId], [CollectionAudio], [CategoryId]) VALUES (1120, N'Word', N'Lipsticks', N'Images/b93aa523-6bbc-4b20-a9c2-15e3fc5ec0c4_0255.png', 1, N'Images/a4a7c1ae-2bbc-4573-947d-ad4f6f3d5381_0354.mp3', 3)
INSERT [dbo].[Collections] ([CollectionId], [CollectionType], [CollectionText], [CollectionImage], [DoctorId], [CollectionAudio], [CategoryId]) VALUES (1121, N'Word', N'Make up Kit', N'Images/49ecea77-657c-4c03-a98d-70b90e4c28d1_0318.png', 1, N'Images/a4a7c1ae-2bbc-4573-947d-ad4f6f3d5381_0354.mp3', 3)
INSERT [dbo].[Collections] ([CollectionId], [CollectionType], [CollectionText], [CollectionImage], [DoctorId], [CollectionAudio], [CategoryId]) VALUES (1122, N'Word', N'Mascara', N'Images/1b66fa60-7472-49ec-a1d2-67933f75153d_0354.png', 1, N'Images/a4a7c1ae-2bbc-4573-947d-ad4f6f3d5381_0354.mp3', 3)
INSERT [dbo].[Collections] ([CollectionId], [CollectionType], [CollectionText], [CollectionImage], [DoctorId], [CollectionAudio], [CategoryId]) VALUES (1123, N'Word', N'Mirror', N'Images/7ce99308-fdc6-46fa-866c-56982297b51f_0421.png', 1, N'Images/a4a7c1ae-2bbc-4573-947d-ad4f6f3d5381_0354.mp3', 3)
INSERT [dbo].[Collections] ([CollectionId], [CollectionType], [CollectionText], [CollectionImage], [DoctorId], [CollectionAudio], [CategoryId]) VALUES (1124, N'Word', N'Nail Polishes', N'Images/bce727ab-40c1-4b47-837f-73aa4c63f14b_0442.png', 1, N'Images/a4a7c1ae-2bbc-4573-947d-ad4f6f3d5381_0354.mp3', 3)
INSERT [dbo].[Collections] ([CollectionId], [CollectionType], [CollectionText], [CollectionImage], [DoctorId], [CollectionAudio], [CategoryId]) VALUES (1125, N'Word', N'Toner', N'Images/cfa7c1c1-b368-49f3-b9e7-37a2bf8bc23d_0502.png', 1, N'Images/a4a7c1ae-2bbc-4573-947d-ad4f6f3d5381_0354.mp3', 3)
INSERT [dbo].[Collections] ([CollectionId], [CollectionType], [CollectionText], [CollectionImage], [DoctorId], [CollectionAudio], [CategoryId]) VALUES (1127, N'Sentence', N'This is a Apple', N'Images/44112053-21a5-47d5-8fc2-f649af41bcc3_3309.jpg', 1, N'Images/a4a7c1ae-2bbc-4573-947d-ad4f6f3d5381_0354.mp3', 0)
INSERT [dbo].[Collections] ([CollectionId], [CollectionType], [CollectionText], [CollectionImage], [DoctorId], [CollectionAudio], [CategoryId]) VALUES (1128, N'Sentence', N'This is a Banana', N'Images/f5e468f1-19a6-4381-b7b2-ef3d6dd69c9f_3327.jpg', 1, N'Images/a4a7c1ae-2bbc-4573-947d-ad4f6f3d5381_0354.mp3', 0)
INSERT [dbo].[Collections] ([CollectionId], [CollectionType], [CollectionText], [CollectionImage], [DoctorId], [CollectionAudio], [CategoryId]) VALUES (1129, N'Sentence', N'This is a Dates', N'Images/b530ff34-9bb0-43fd-b2cf-57de0a7ce15b_3339.jpg', 1, N'Images/a4a7c1ae-2bbc-4573-947d-ad4f6f3d5381_0354.mp3', 0)
INSERT [dbo].[Collections] ([CollectionId], [CollectionType], [CollectionText], [CollectionImage], [DoctorId], [CollectionAudio], [CategoryId]) VALUES (1130, N'Sentence', N'This is Apple and Banana', N'Images/44112053-21a5-47d5-8fc2-f649af41bcc3_3309.jpg', 1, N'Images/a4a7c1ae-2bbc-4573-947d-ad4f6f3d5381_0354.mp3', 0)
INSERT [dbo].[Collections] ([CollectionId], [CollectionType], [CollectionText], [CollectionImage], [DoctorId], [CollectionAudio], [CategoryId]) VALUES (1131, N'Sentence', N'This is Apple and Dates', N'Images/44112053-21a5-47d5-8fc2-f649af41bcc3_3309.jpg', 1, N'Images/a4a7c1ae-2bbc-4573-947d-ad4f6f3d5381_0354.mp3', 0)
INSERT [dbo].[Collections] ([CollectionId], [CollectionType], [CollectionText], [CollectionImage], [DoctorId], [CollectionAudio], [CategoryId]) VALUES (1132, N'Sentence', N'This is Banana and Dates', N'Images/f5e468f1-19a6-4381-b7b2-ef3d6dd69c9f_3327.jpg', 1, N'Images/a4a7c1ae-2bbc-4573-947d-ad4f6f3d5381_0354.mp3', 0)
INSERT [dbo].[Collections] ([CollectionId], [CollectionType], [CollectionText], [CollectionImage], [DoctorId], [CollectionAudio], [CategoryId]) VALUES (1133, N'Sentence', N'This is Apple and Melon', N'Images/44112053-21a5-47d5-8fc2-f649af41bcc3_3309.jpg', 1, N'Images/a4a7c1ae-2bbc-4573-947d-ad4f6f3d5381_0354.mp3', 0)
INSERT [dbo].[Collections] ([CollectionId], [CollectionType], [CollectionText], [CollectionImage], [DoctorId], [CollectionAudio], [CategoryId]) VALUES (1134, N'Sentence', N'This is Banana and Melon', N'Images/f5e468f1-19a6-4381-b7b2-ef3d6dd69c9f_3327.jpg', 1, N'Images/a4a7c1ae-2bbc-4573-947d-ad4f6f3d5381_0354.mp3', 0)
INSERT [dbo].[Collections] ([CollectionId], [CollectionType], [CollectionText], [CollectionImage], [DoctorId], [CollectionAudio], [CategoryId]) VALUES (1135, N'Sentence', N'This is a Bag', N'Images/b0e23911-7faf-4a5b-9b84-3e5fac18504c_5036.PNG', 1, N'Images/a4a7c1ae-2bbc-4573-947d-ad4f6f3d5381_0354.mp3', 0)
INSERT [dbo].[Collections] ([CollectionId], [CollectionType], [CollectionText], [CollectionImage], [DoctorId], [CollectionAudio], [CategoryId]) VALUES (1136, N'Sentence', N'This is a Black Board', N'Images/4ccb4954-5169-4c05-aae7-365bb677d4f7_5125.PNG', 1, N'Images/a4a7c1ae-2bbc-4573-947d-ad4f6f3d5381_0354.mp3', 0)
INSERT [dbo].[Collections] ([CollectionId], [CollectionType], [CollectionText], [CollectionImage], [DoctorId], [CollectionAudio], [CategoryId]) VALUES (1137, N'Sentence', N'This is Bag and ink', N'Images/b0e23911-7faf-4a5b-9b84-3e5fac18504c_5036.PNG', 1, N'Images/a4a7c1ae-2bbc-4573-947d-ad4f6f3d5381_0354.mp3', 0)
INSERT [dbo].[Collections] ([CollectionId], [CollectionType], [CollectionText], [CollectionImage], [DoctorId], [CollectionAudio], [CategoryId]) VALUES (1138, N'Sentence', N'This is Black Board and ink', N'Images/4ccb4954-5169-4c05-aae7-365bb677d4f7_5125.PNG', 1, N'Images/a4a7c1ae-2bbc-4573-947d-ad4f6f3d5381_0354.mp3', 0)
INSERT [dbo].[Collections] ([CollectionId], [CollectionType], [CollectionText], [CollectionImage], [DoctorId], [CollectionAudio], [CategoryId]) VALUES (1139, N'Sentence', N'This is Bag and Pen', N'Images/b0e23911-7faf-4a5b-9b84-3e5fac18504c_5036.PNG', 1, N'Images/a4a7c1ae-2bbc-4573-947d-ad4f6f3d5381_0354.mp3', 0)
INSERT [dbo].[Collections] ([CollectionId], [CollectionType], [CollectionText], [CollectionImage], [DoctorId], [CollectionAudio], [CategoryId]) VALUES (1140, N'Sentence', N'This is Black Board and Pen', N'Images/4ccb4954-5169-4c05-aae7-365bb677d4f7_5125.PNG', 1, N'Images/a4a7c1ae-2bbc-4573-947d-ad4f6f3d5381_0354.mp3', 0)
INSERT [dbo].[Collections] ([CollectionId], [CollectionType], [CollectionText], [CollectionImage], [DoctorId], [CollectionAudio], [CategoryId]) VALUES (1141, N'Sentence', N'This is Class Room', N'Images/23177a54-29e1-4bd5-933c-ed9e782defb7_0648.PNG', 1, N'Images/a4a7c1ae-2bbc-4573-947d-ad4f6f3d5381_0354.mp3', 0)
INSERT [dbo].[Collections] ([CollectionId], [CollectionType], [CollectionText], [CollectionImage], [DoctorId], [CollectionAudio], [CategoryId]) VALUES (1142, N'Sentence', N'This is Desk', N'Images/09037722-0169-45b2-9a0a-e3f468df0c40_0712.jpg', 1, N'Images/a4a7c1ae-2bbc-4573-947d-ad4f6f3d5381_0354.mp3', 0)
INSERT [dbo].[Collections] ([CollectionId], [CollectionType], [CollectionText], [CollectionImage], [DoctorId], [CollectionAudio], [CategoryId]) VALUES (1143, N'Sentence', N'This is Loin and Camel', N'Images/25ce64b2-5b07-45e8-85c6-38deb8c02549_1250.jpg', 1, N'Images/a4a7c1ae-2bbc-4573-947d-ad4f6f3d5381_0354.mp3', 0)
INSERT [dbo].[Collections] ([CollectionId], [CollectionType], [CollectionText], [CollectionImage], [DoctorId], [CollectionAudio], [CategoryId]) VALUES (1145, N'Sentence', N'This is Loin and Cat', N'Images/25ce64b2-5b07-45e8-85c6-38deb8c02549_1250.jpg', 1, N'Images/a4a7c1ae-2bbc-4573-947d-ad4f6f3d5381_0354.mp3', 0)
INSERT [dbo].[Collections] ([CollectionId], [CollectionType], [CollectionText], [CollectionImage], [DoctorId], [CollectionAudio], [CategoryId]) VALUES (1147, N'Sentence', N'This is Melon', N'Images/49006d54-6278-47fd-bd61-8cea22545f58_3412.jpg', 1, N'Images/a4a7c1ae-2bbc-4573-947d-ad4f6f3d5381_0354.mp3', 0)
INSERT [dbo].[Collections] ([CollectionId], [CollectionType], [CollectionText], [CollectionImage], [DoctorId], [CollectionAudio], [CategoryId]) VALUES (1148, N'Sentence', N'This is Pen', N'Images/e557b056-1ee9-4688-9c60-5bb5cf64eb9d_0809.jpg', 1, N'Images/a4a7c1ae-2bbc-4573-947d-ad4f6f3d5381_0354.mp3', 0)
INSERT [dbo].[Collections] ([CollectionId], [CollectionType], [CollectionText], [CollectionImage], [DoctorId], [CollectionAudio], [CategoryId]) VALUES (2153, N'Word', N'School', N'Images/9295e72d-c86c-41df-ac3a-1f9f8492ec39_4200.jpg', 1, N'Images/3dd692df-61fe-404e-a4e8-e674f8d2b29b_4200.m4a', 3)
INSERT [dbo].[Collections] ([CollectionId], [CollectionType], [CollectionText], [CollectionImage], [DoctorId], [CollectionAudio], [CategoryId]) VALUES (2154, N'Word', N'Mmmm', N'Images/113abd60-6051-476f-98d0-fac453c72105_4628.jpg', 1, N'Images/23dd1990-ceb3-4499-8295-7ba127cae427_4628.m4a', 3)
SET IDENTITY_INSERT [dbo].[Collections] OFF
GO
SET IDENTITY_INSERT [dbo].[PatientAnswers] ON 

INSERT [dbo].[PatientAnswers] ([AnsId], [AppPracticeId], [CollectionText], [CollectionImage], [CollectionAudio], [IsAttempted], [IsRight], [PatientSelectedText]) VALUES (38, 10, N'Book On Table', N'Images/743c2d05-babf-4db6-aa75-22a92e48d278_2204.png', N'Images/a4a7c1ae-2bbc-4573-947d-ad4f6f3d5381_0354.mp3', 1, 1, N'Book On Table')
INSERT [dbo].[PatientAnswers] ([AnsId], [AppPracticeId], [CollectionText], [CollectionImage], [CollectionAudio], [IsAttempted], [IsRight], [PatientSelectedText]) VALUES (39, 10, N'Book on table', N'Images/06a67293-b7c3-458f-9fdc-27be56bf2920_3456.gif', N'Images/a4a7c1ae-2bbc-4573-947d-ad4f6f3d5381_0354.mp3', 1, 1, N'Book on table')
INSERT [dbo].[PatientAnswers] ([AnsId], [AppPracticeId], [CollectionText], [CollectionImage], [CollectionAudio], [IsAttempted], [IsRight], [PatientSelectedText]) VALUES (40, 10, N'It is raining', N'Images/46c6fce4-050f-4bf6-b5b3-af3a4072f4f4_3510.jpg', N'Images/a4a7c1ae-2bbc-4573-947d-ad4f6f3d5381_0354.mp3', 1, 1, N'It is raining')
INSERT [dbo].[PatientAnswers] ([AnsId], [AppPracticeId], [CollectionText], [CollectionImage], [CollectionAudio], [IsAttempted], [IsRight], [PatientSelectedText]) VALUES (41, 10, N'glass on table', N'Images/2745f526-a0cf-4e32-8c78-0337c2031d7c_2203.jpg', N'Images/a4a7c1ae-2bbc-4573-947d-ad4f6f3d5381_0354.mp3', 1, 1, N'glass on table')
INSERT [dbo].[PatientAnswers] ([AnsId], [AppPracticeId], [CollectionText], [CollectionImage], [CollectionAudio], [IsAttempted], [IsRight], [PatientSelectedText]) VALUES (42, 10, N'jug on table', N'Images/8d16d859-0518-4e61-ae09-9f11a2b15cbe_2231.jpg', N'Images/a4a7c1ae-2bbc-4573-947d-ad4f6f3d5381_0354.mp3', 1, 0, N'Book on table')
INSERT [dbo].[PatientAnswers] ([AnsId], [AppPracticeId], [CollectionText], [CollectionImage], [CollectionAudio], [IsAttempted], [IsRight], [PatientSelectedText]) VALUES (43, 10, N'shoes on table', N'Images/7ad222cd-35a8-4cb7-bad8-b68f6075161b_2250.jpg', N'Images/a4a7c1ae-2bbc-4573-947d-ad4f6f3d5381_0354.mp3', 1, 0, N'man watching road')
INSERT [dbo].[PatientAnswers] ([AnsId], [AppPracticeId], [CollectionText], [CollectionImage], [CollectionAudio], [IsAttempted], [IsRight], [PatientSelectedText]) VALUES (44, 11, N'it is snowing', N'Images/999e7664-9b3a-49f5-be8b-2e37b75a68b1_3355.jpg', N'Images/a4a7c1ae-2bbc-4573-947d-ad4f6f3d5381_0354.mp3', 1, 0, N'man watching road')
INSERT [dbo].[PatientAnswers] ([AnsId], [AppPracticeId], [CollectionText], [CollectionImage], [CollectionAudio], [IsAttempted], [IsRight], [PatientSelectedText]) VALUES (45, 11, N'child watching Tv', N'Images/cc55079d-b64e-48f4-a519-9aca29c5e98b_3305.jpg', N'Images/a4a7c1ae-2bbc-4573-947d-ad4f6f3d5381_0354.mp3', 1, 0, N'Book on table')
INSERT [dbo].[PatientAnswers] ([AnsId], [AppPracticeId], [CollectionText], [CollectionImage], [CollectionAudio], [IsAttempted], [IsRight], [PatientSelectedText]) VALUES (46, 11, N'girl watching sea', N'Images/1ada2a2a-e2fd-4239-8e80-bac087654ebe_3230.PNG', N'Images/a4a7c1ae-2bbc-4573-947d-ad4f6f3d5381_0354.mp3', 1, 1, N'girl watching sea')
INSERT [dbo].[PatientAnswers] ([AnsId], [AppPracticeId], [CollectionText], [CollectionImage], [CollectionAudio], [IsAttempted], [IsRight], [PatientSelectedText]) VALUES (47, 11, N'man watching road', N'Images/a566cb24-8d9a-4a53-a8c6-f5f66f6f88d2_3204.jpg', N'Images/a4a7c1ae-2bbc-4573-947d-ad4f6f3d5381_0354.mp3', 1, 0, N'It is raining')
INSERT [dbo].[PatientAnswers] ([AnsId], [AppPracticeId], [CollectionText], [CollectionImage], [CollectionAudio], [IsAttempted], [IsRight], [PatientSelectedText]) VALUES (48, 12, N'Camel', N'Images/d8d889fb-b8e6-4fc3-a296-4b35dc3d08f9_0705.jpg', N'Images/a4a7c1ae-2bbc-4573-947d-ad4f6f3d5381_0354.mp3', 0, 0, N'')
INSERT [dbo].[PatientAnswers] ([AnsId], [AppPracticeId], [CollectionText], [CollectionImage], [CollectionAudio], [IsAttempted], [IsRight], [PatientSelectedText]) VALUES (49, 12, N'Cat', N'Images/2f0e49ea-2e65-4d67-9767-35521e2a374b_0720.jpg', N'Images/a4a7c1ae-2bbc-4573-947d-ad4f6f3d5381_0354.mp3', 0, 0, N'')
INSERT [dbo].[PatientAnswers] ([AnsId], [AppPracticeId], [CollectionText], [CollectionImage], [CollectionAudio], [IsAttempted], [IsRight], [PatientSelectedText]) VALUES (50, 12, N'Cheetah', N'Images/8d2cc825-2c41-47bf-8615-e6128528b666_0736.PNG', N'Images/a4a7c1ae-2bbc-4573-947d-ad4f6f3d5381_0354.mp3', 1, 0, N'Elephant')
INSERT [dbo].[PatientAnswers] ([AnsId], [AppPracticeId], [CollectionText], [CollectionImage], [CollectionAudio], [IsAttempted], [IsRight], [PatientSelectedText]) VALUES (51, 12, N'Cow', N'Images/a94a4847-3ba6-4ce7-8bba-b9fdc5bde94c_0747.jpg', N'Images/a4a7c1ae-2bbc-4573-947d-ad4f6f3d5381_0354.mp3', 1, 1, N'Cow')
INSERT [dbo].[PatientAnswers] ([AnsId], [AppPracticeId], [CollectionText], [CollectionImage], [CollectionAudio], [IsAttempted], [IsRight], [PatientSelectedText]) VALUES (52, 12, N'Dog', N'Images/122c2c58-9d7a-48b6-9ceb-3a7448f16e65_1157.jpg', N'Images/a4a7c1ae-2bbc-4573-947d-ad4f6f3d5381_0354.mp3', 0, 0, N'')
INSERT [dbo].[PatientAnswers] ([AnsId], [AppPracticeId], [CollectionText], [CollectionImage], [CollectionAudio], [IsAttempted], [IsRight], [PatientSelectedText]) VALUES (53, 12, N'Donkey', N'Images/76db8b84-102b-4840-a2e1-d60fe069678a_1219.jpg', N'Images/a4a7c1ae-2bbc-4573-947d-ad4f6f3d5381_0354.mp3', 0, 0, N'')
INSERT [dbo].[PatientAnswers] ([AnsId], [AppPracticeId], [CollectionText], [CollectionImage], [CollectionAudio], [IsAttempted], [IsRight], [PatientSelectedText]) VALUES (54, 12, N'Elephant', N'Images/4603a7b8-a0ee-4dbf-b7dd-26571caed231_1232.PNG', N'Images/a4a7c1ae-2bbc-4573-947d-ad4f6f3d5381_0354.mp3', 1, 0, N'Bat')
INSERT [dbo].[PatientAnswers] ([AnsId], [AppPracticeId], [CollectionText], [CollectionImage], [CollectionAudio], [IsAttempted], [IsRight], [PatientSelectedText]) VALUES (55, 12, N'Goat', N'Images/d7273921-f990-43b9-9ef2-dabc7d75923f_1240.jpg', N'Images/a4a7c1ae-2bbc-4573-947d-ad4f6f3d5381_0354.mp3', 1, 1, N'Goat')
INSERT [dbo].[PatientAnswers] ([AnsId], [AppPracticeId], [CollectionText], [CollectionImage], [CollectionAudio], [IsAttempted], [IsRight], [PatientSelectedText]) VALUES (56, 12, N'Loin', N'Images/25ce64b2-5b07-45e8-85c6-38deb8c02549_1250.jpg', N'Images/a4a7c1ae-2bbc-4573-947d-ad4f6f3d5381_0354.mp3', 0, 0, N'')
INSERT [dbo].[PatientAnswers] ([AnsId], [AppPracticeId], [CollectionText], [CollectionImage], [CollectionAudio], [IsAttempted], [IsRight], [PatientSelectedText]) VALUES (57, 12, N'Rabbit', N'Images/7833d78e-a593-4cfa-8d5b-4295b5ac6043_1303.jpg', N'Images/a4a7c1ae-2bbc-4573-947d-ad4f6f3d5381_0354.mp3', 1, 0, N'Donkey')
INSERT [dbo].[PatientAnswers] ([AnsId], [AppPracticeId], [CollectionText], [CollectionImage], [CollectionAudio], [IsAttempted], [IsRight], [PatientSelectedText]) VALUES (58, 12, N'Zeebra', N'Images/28c2a6a4-e96b-49eb-9044-8c9c46dba7b0_1321.jpg', N'Images/a4a7c1ae-2bbc-4573-947d-ad4f6f3d5381_0354.mp3', 1, 1, N'Zeebra')
INSERT [dbo].[PatientAnswers] ([AnsId], [AppPracticeId], [CollectionText], [CollectionImage], [CollectionAudio], [IsAttempted], [IsRight], [PatientSelectedText]) VALUES (59, 13, N'Bat', N'Images/bcd46ec5-78f1-4bac-bf40-58cae5e8a297_3044.PNG', N'Images/a4a7c1ae-2bbc-4573-947d-ad4f6f3d5381_0354.mp3', 1, 0, N'Sparrow')
INSERT [dbo].[PatientAnswers] ([AnsId], [AppPracticeId], [CollectionText], [CollectionImage], [CollectionAudio], [IsAttempted], [IsRight], [PatientSelectedText]) VALUES (60, 13, N'Crane', N'Images/07014e71-3d36-4b26-a56f-4a5d192a8d14_3053.PNG', N'Images/a4a7c1ae-2bbc-4573-947d-ad4f6f3d5381_0354.mp3', 1, 1, N'Crane')
INSERT [dbo].[PatientAnswers] ([AnsId], [AppPracticeId], [CollectionText], [CollectionImage], [CollectionAudio], [IsAttempted], [IsRight], [PatientSelectedText]) VALUES (61, 13, N'Crow', N'Images/93d084a5-6dd7-40c6-90c4-eab695146422_3104.PNG', N'Images/a4a7c1ae-2bbc-4573-947d-ad4f6f3d5381_0354.mp3', 1, 0, N'Brushes')
INSERT [dbo].[PatientAnswers] ([AnsId], [AppPracticeId], [CollectionText], [CollectionImage], [CollectionAudio], [IsAttempted], [IsRight], [PatientSelectedText]) VALUES (62, 13, N'Duck', N'Images/75b567eb-6b88-4ab6-a6ea-a0cc08abdeca_3116.PNG', N'Images/a4a7c1ae-2bbc-4573-947d-ad4f6f3d5381_0354.mp3', 1, 0, N'Brushes')
INSERT [dbo].[PatientAnswers] ([AnsId], [AppPracticeId], [CollectionText], [CollectionImage], [CollectionAudio], [IsAttempted], [IsRight], [PatientSelectedText]) VALUES (63, 13, N'Falcon', N'Images/9975a96d-6417-49d5-b729-26c890b6dc37_3128.png', N'Images/a4a7c1ae-2bbc-4573-947d-ad4f6f3d5381_0354.mp3', 1, 1, N'Falcon')
INSERT [dbo].[PatientAnswers] ([AnsId], [AppPracticeId], [CollectionText], [CollectionImage], [CollectionAudio], [IsAttempted], [IsRight], [PatientSelectedText]) VALUES (64, 13, N'Goose', N'Images/957080b0-3538-46d9-9ff4-5a36e66166e6_3138.PNG', N'Images/a4a7c1ae-2bbc-4573-947d-ad4f6f3d5381_0354.mp3', 1, 1, N'Goose')
INSERT [dbo].[PatientAnswers] ([AnsId], [AppPracticeId], [CollectionText], [CollectionImage], [CollectionAudio], [IsAttempted], [IsRight], [PatientSelectedText]) VALUES (65, 13, N'Hen', N'Images/5b6c67e3-47a8-43c1-bb1a-82ca7076c5ba_3147.jpg', N'Images/a4a7c1ae-2bbc-4573-947d-ad4f6f3d5381_0354.mp3', 1, 1, N'Hen')
INSERT [dbo].[PatientAnswers] ([AnsId], [AppPracticeId], [CollectionText], [CollectionImage], [CollectionAudio], [IsAttempted], [IsRight], [PatientSelectedText]) VALUES (66, 13, N'PeeCock', N'Images/8dc30fc8-a85e-40cb-b819-5b22c6ab0825_3204.jpg', N'Images/a4a7c1ae-2bbc-4573-947d-ad4f6f3d5381_0354.mp3', 1, 1, N'PeeCock')
INSERT [dbo].[PatientAnswers] ([AnsId], [AppPracticeId], [CollectionText], [CollectionImage], [CollectionAudio], [IsAttempted], [IsRight], [PatientSelectedText]) VALUES (67, 13, N'Perot', N'Images/d5576129-3e72-4c7e-845d-20732ae3b7be_3216.jpg', N'Images/a4a7c1ae-2bbc-4573-947d-ad4f6f3d5381_0354.mp3', 1, 1, N'Perot')
INSERT [dbo].[PatientAnswers] ([AnsId], [AppPracticeId], [CollectionText], [CollectionImage], [CollectionAudio], [IsAttempted], [IsRight], [PatientSelectedText]) VALUES (68, 13, N'Pigeon', N'Images/6f552ddc-eb52-49bf-9f8f-8154e9cfa7a5_3229.PNG', N'Images/a4a7c1ae-2bbc-4573-947d-ad4f6f3d5381_0354.mp3', 1, 0, N'Elephant')
INSERT [dbo].[PatientAnswers] ([AnsId], [AppPracticeId], [CollectionText], [CollectionImage], [CollectionAudio], [IsAttempted], [IsRight], [PatientSelectedText]) VALUES (69, 13, N'Rooster', N'Images/d1d7d389-e5d1-4bb7-ac36-4acf3c31305d_3239.jpg', N'Images/a4a7c1ae-2bbc-4573-947d-ad4f6f3d5381_0354.mp3', 1, 0, N'Elephant')
INSERT [dbo].[PatientAnswers] ([AnsId], [AppPracticeId], [CollectionText], [CollectionImage], [CollectionAudio], [IsAttempted], [IsRight], [PatientSelectedText]) VALUES (70, 13, N'Sparrow', N'Images/3405f899-375c-4c40-a257-86e2768bcceb_3252.jpg', N'Images/a4a7c1ae-2bbc-4573-947d-ad4f6f3d5381_0354.mp3', 1, 1, N'Sparrow')
INSERT [dbo].[PatientAnswers] ([AnsId], [AppPracticeId], [CollectionText], [CollectionImage], [CollectionAudio], [IsAttempted], [IsRight], [PatientSelectedText]) VALUES (71, 13, N'Swallow', N'Images/1b9b5cd1-2a3e-4dd6-99dd-addd0a768be1_3304.PNG', N'Images/a4a7c1ae-2bbc-4573-947d-ad4f6f3d5381_0354.mp3', 1, 0, N'Elephant')
INSERT [dbo].[PatientAnswers] ([AnsId], [AppPracticeId], [CollectionText], [CollectionImage], [CollectionAudio], [IsAttempted], [IsRight], [PatientSelectedText]) VALUES (72, 14, N'Brightener', N'Images/9f9d998d-62b1-4e5e-b59e-c06fd9d57f35_0125.png', N'Images/a4a7c1ae-2bbc-4573-947d-ad4f6f3d5381_0354.mp3', 1, 0, N'Elephant')
INSERT [dbo].[PatientAnswers] ([AnsId], [AppPracticeId], [CollectionText], [CollectionImage], [CollectionAudio], [IsAttempted], [IsRight], [PatientSelectedText]) VALUES (73, 14, N'Brushes', N'Images/91194bff-fa32-4bc6-b087-58b5daf78114_0200.png', N'Images/a4a7c1ae-2bbc-4573-947d-ad4f6f3d5381_0354.mp3', 1, 1, N'Brushes')
INSERT [dbo].[PatientAnswers] ([AnsId], [AppPracticeId], [CollectionText], [CollectionImage], [CollectionAudio], [IsAttempted], [IsRight], [PatientSelectedText]) VALUES (74, 14, N'Cleanser', N'Images/c809a255-ed0e-4444-9630-c495013851f9_0220.png', N'Images/a4a7c1ae-2bbc-4573-947d-ad4f6f3d5381_0354.mp3', 0, 0, N'')
INSERT [dbo].[PatientAnswers] ([AnsId], [AppPracticeId], [CollectionText], [CollectionImage], [CollectionAudio], [IsAttempted], [IsRight], [PatientSelectedText]) VALUES (75, 14, N'Eyeshadow', N'Images/3512f559-1274-4d35-aef6-0077e7cbe95e_0239.png', N'Images/a4a7c1ae-2bbc-4573-947d-ad4f6f3d5381_0354.mp3', 0, 0, N'')
INSERT [dbo].[PatientAnswers] ([AnsId], [AppPracticeId], [CollectionText], [CollectionImage], [CollectionAudio], [IsAttempted], [IsRight], [PatientSelectedText]) VALUES (76, 14, N'Lipsticks', N'Images/b93aa523-6bbc-4b20-a9c2-15e3fc5ec0c4_0255.png', N'Images/a4a7c1ae-2bbc-4573-947d-ad4f6f3d5381_0354.mp3', 0, 0, N'')
INSERT [dbo].[PatientAnswers] ([AnsId], [AppPracticeId], [CollectionText], [CollectionImage], [CollectionAudio], [IsAttempted], [IsRight], [PatientSelectedText]) VALUES (77, 14, N'Make up Kit', N'Images/49ecea77-657c-4c03-a98d-70b90e4c28d1_0318.png', N'Images/a4a7c1ae-2bbc-4573-947d-ad4f6f3d5381_0354.mp3', 0, 0, N'')
INSERT [dbo].[PatientAnswers] ([AnsId], [AppPracticeId], [CollectionText], [CollectionImage], [CollectionAudio], [IsAttempted], [IsRight], [PatientSelectedText]) VALUES (78, 14, N'Mascara', N'Images/1b66fa60-7472-49ec-a1d2-67933f75153d_0354.png', N'Images/a4a7c1ae-2bbc-4573-947d-ad4f6f3d5381_0354.mp3', 0, 0, N'')
INSERT [dbo].[PatientAnswers] ([AnsId], [AppPracticeId], [CollectionText], [CollectionImage], [CollectionAudio], [IsAttempted], [IsRight], [PatientSelectedText]) VALUES (79, 14, N'Mirror', N'Images/7ce99308-fdc6-46fa-866c-56982297b51f_0421.png', N'Images/a4a7c1ae-2bbc-4573-947d-ad4f6f3d5381_0354.mp3', 0, 0, N'')
INSERT [dbo].[PatientAnswers] ([AnsId], [AppPracticeId], [CollectionText], [CollectionImage], [CollectionAudio], [IsAttempted], [IsRight], [PatientSelectedText]) VALUES (80, 14, N'Nail Polishes', N'Images/bce727ab-40c1-4b47-837f-73aa4c63f14b_0442.png', N'Images/a4a7c1ae-2bbc-4573-947d-ad4f6f3d5381_0354.mp3', 0, 0, N'')
INSERT [dbo].[PatientAnswers] ([AnsId], [AppPracticeId], [CollectionText], [CollectionImage], [CollectionAudio], [IsAttempted], [IsRight], [PatientSelectedText]) VALUES (81, 14, N'Toner', N'Images/cfa7c1c1-b368-49f3-b9e7-37a2bf8bc23d_0502.png', N'Images/a4a7c1ae-2bbc-4573-947d-ad4f6f3d5381_0354.mp3', 0, 0, N'')
INSERT [dbo].[PatientAnswers] ([AnsId], [AppPracticeId], [CollectionText], [CollectionImage], [CollectionAudio], [IsAttempted], [IsRight], [PatientSelectedText]) VALUES (82, 15, N'Camel', N'Images/d8d889fb-b8e6-4fc3-a296-4b35dc3d08f9_0705.jpg', N'Images/3e1bddbf-91ed-4cf2-9a20-ed04061267f3_4400.mp3', 0, 0, N'')
INSERT [dbo].[PatientAnswers] ([AnsId], [AppPracticeId], [CollectionText], [CollectionImage], [CollectionAudio], [IsAttempted], [IsRight], [PatientSelectedText]) VALUES (83, 15, N'Cat', N'Images/2f0e49ea-2e65-4d67-9767-35521e2a374b_0720.jpg', N'Images/6a23e612-080e-4f8f-b910-702728c12a9a_4415.mp3', 0, 0, N'')
INSERT [dbo].[PatientAnswers] ([AnsId], [AppPracticeId], [CollectionText], [CollectionImage], [CollectionAudio], [IsAttempted], [IsRight], [PatientSelectedText]) VALUES (84, 15, N'Cheetah', N'Images/8d2cc825-2c41-47bf-8615-e6128528b666_0736.PNG', N'Images/7d9b999d-f105-4ca6-9914-ea65ade204aa_4448.mp3', 0, 0, N'')
INSERT [dbo].[PatientAnswers] ([AnsId], [AppPracticeId], [CollectionText], [CollectionImage], [CollectionAudio], [IsAttempted], [IsRight], [PatientSelectedText]) VALUES (85, 15, N'Cow', N'Images/a94a4847-3ba6-4ce7-8bba-b9fdc5bde94c_0747.jpg', N'Images/bf182c3a-d8ec-4883-a8a7-92753b61dbd4_4501.mp3', 0, 0, N'')
INSERT [dbo].[PatientAnswers] ([AnsId], [AppPracticeId], [CollectionText], [CollectionImage], [CollectionAudio], [IsAttempted], [IsRight], [PatientSelectedText]) VALUES (86, 15, N'Dog', N'Images/122c2c58-9d7a-48b6-9ceb-3a7448f16e65_1157.jpg', N'Images/c990a0fa-d28d-4bfd-8c15-eb25c30b678b_4653.mp3', 0, 0, N'')
INSERT [dbo].[PatientAnswers] ([AnsId], [AppPracticeId], [CollectionText], [CollectionImage], [CollectionAudio], [IsAttempted], [IsRight], [PatientSelectedText]) VALUES (87, 15, N'Donkey', N'Images/76db8b84-102b-4840-a2e1-d60fe069678a_1219.jpg', N'Images/b7898e8d-5666-4557-99cf-ff93e48d71f4_5538.mp3', 0, 0, N'')
INSERT [dbo].[PatientAnswers] ([AnsId], [AppPracticeId], [CollectionText], [CollectionImage], [CollectionAudio], [IsAttempted], [IsRight], [PatientSelectedText]) VALUES (88, 15, N'Elephant', N'Images/4603a7b8-a0ee-4dbf-b7dd-26571caed231_1232.PNG', N'Images/f230f37d-31bd-48d4-8b00-89223f559517_5627.mp3', 0, 0, N'')
INSERT [dbo].[PatientAnswers] ([AnsId], [AppPracticeId], [CollectionText], [CollectionImage], [CollectionAudio], [IsAttempted], [IsRight], [PatientSelectedText]) VALUES (89, 15, N'Goat', N'Images/d7273921-f990-43b9-9ef2-dabc7d75923f_1240.jpg', N'Images/5259cebe-6b05-41be-a5d2-62cf4d60cd97_5647.mp3', 0, 0, N'')
INSERT [dbo].[PatientAnswers] ([AnsId], [AppPracticeId], [CollectionText], [CollectionImage], [CollectionAudio], [IsAttempted], [IsRight], [PatientSelectedText]) VALUES (90, 15, N'Lion', N'Images/25ce64b2-5b07-45e8-85c6-38deb8c02549_1250.jpg', N'Images/452e31ba-bb48-40eb-b028-493df848a32f_0033.mp3', 0, 0, N'')
INSERT [dbo].[PatientAnswers] ([AnsId], [AppPracticeId], [CollectionText], [CollectionImage], [CollectionAudio], [IsAttempted], [IsRight], [PatientSelectedText]) VALUES (91, 15, N'Rabbit', N'Images/7833d78e-a593-4cfa-8d5b-4295b5ac6043_1303.jpg', N'Images/77caef2d-b648-4f3c-abcc-eae39c870747_0120.mp3', 0, 0, N'')
INSERT [dbo].[PatientAnswers] ([AnsId], [AppPracticeId], [CollectionText], [CollectionImage], [CollectionAudio], [IsAttempted], [IsRight], [PatientSelectedText]) VALUES (92, 15, N'Zeebra', N'Images/28c2a6a4-e96b-49eb-9044-8c9c46dba7b0_1321.jpg', N'Images/d1b427ba-9500-47f3-b719-67eb146df304_0135.mp3', 0, 0, N'')
INSERT [dbo].[PatientAnswers] ([AnsId], [AppPracticeId], [CollectionText], [CollectionImage], [CollectionAudio], [IsAttempted], [IsRight], [PatientSelectedText]) VALUES (93, 16, N'Bat', N'Images/bcd46ec5-78f1-4bac-bf40-58cae5e8a297_3044.PNG', N'Images/e84a89a3-8ce2-4e14-96d9-d0217482c3b3_0145.mp3', 0, 0, N'')
INSERT [dbo].[PatientAnswers] ([AnsId], [AppPracticeId], [CollectionText], [CollectionImage], [CollectionAudio], [IsAttempted], [IsRight], [PatientSelectedText]) VALUES (94, 16, N'Crane', N'Images/07014e71-3d36-4b26-a56f-4a5d192a8d14_3053.PNG', N'Images/dd2a3895-c13f-4429-b756-ee39c2878df9_0158.mp3', 0, 0, N'')
INSERT [dbo].[PatientAnswers] ([AnsId], [AppPracticeId], [CollectionText], [CollectionImage], [CollectionAudio], [IsAttempted], [IsRight], [PatientSelectedText]) VALUES (95, 16, N'Crow', N'Images/93d084a5-6dd7-40c6-90c4-eab695146422_3104.PNG', N'Images/4414d646-36fe-4142-a5e2-d92ddbe93ee4_0221.mp3', 0, 0, N'')
INSERT [dbo].[PatientAnswers] ([AnsId], [AppPracticeId], [CollectionText], [CollectionImage], [CollectionAudio], [IsAttempted], [IsRight], [PatientSelectedText]) VALUES (96, 16, N'Duck', N'Images/75b567eb-6b88-4ab6-a6ea-a0cc08abdeca_3116.PNG', N'Images/f962a0c3-73c7-4e7d-92b4-f21847f8f46a_0239.mp3', 0, 0, N'')
INSERT [dbo].[PatientAnswers] ([AnsId], [AppPracticeId], [CollectionText], [CollectionImage], [CollectionAudio], [IsAttempted], [IsRight], [PatientSelectedText]) VALUES (97, 16, N'Falcon', N'Images/9975a96d-6417-49d5-b729-26c890b6dc37_3128.png', N'Images/bf93a15b-99a6-4cba-8a56-522ea4d4be90_0302.mp3', 0, 0, N'')
INSERT [dbo].[PatientAnswers] ([AnsId], [AppPracticeId], [CollectionText], [CollectionImage], [CollectionAudio], [IsAttempted], [IsRight], [PatientSelectedText]) VALUES (98, 16, N'Goose', N'Images/957080b0-3538-46d9-9ff4-5a36e66166e6_3138.PNG', N'Images/b3cbd9e9-8954-4dc4-a927-65fa33a73737_0342.mp3', 0, 0, N'')
INSERT [dbo].[PatientAnswers] ([AnsId], [AppPracticeId], [CollectionText], [CollectionImage], [CollectionAudio], [IsAttempted], [IsRight], [PatientSelectedText]) VALUES (99, 16, N'Hen', N'Images/5b6c67e3-47a8-43c1-bb1a-82ca7076c5ba_3147.jpg', N'Images/55d14a79-4703-405b-88d8-d93d29536a34_0356.mp3', 0, 0, N'')
INSERT [dbo].[PatientAnswers] ([AnsId], [AppPracticeId], [CollectionText], [CollectionImage], [CollectionAudio], [IsAttempted], [IsRight], [PatientSelectedText]) VALUES (100, 16, N'PeeCock', N'Images/8dc30fc8-a85e-40cb-b819-5b22c6ab0825_3204.jpg', N'Images/5c0e5ab9-3f7e-4668-8bb2-1c0b73c6cc4e_0415.mp3', 0, 0, N'')
INSERT [dbo].[PatientAnswers] ([AnsId], [AppPracticeId], [CollectionText], [CollectionImage], [CollectionAudio], [IsAttempted], [IsRight], [PatientSelectedText]) VALUES (101, 16, N'Perot', N'Images/d5576129-3e72-4c7e-845d-20732ae3b7be_3216.jpg', N'Images/2178c8f3-93f9-4c7c-8e54-a5f33ea704f9_0440.mp3', 0, 0, N'')
INSERT [dbo].[PatientAnswers] ([AnsId], [AppPracticeId], [CollectionText], [CollectionImage], [CollectionAudio], [IsAttempted], [IsRight], [PatientSelectedText]) VALUES (102, 16, N'Pigeon', N'Images/6f552ddc-eb52-49bf-9f8f-8154e9cfa7a5_3229.PNG', N'Images/4e7e014c-2267-4864-aa89-48676901bbae_0502.mp3', 0, 0, N'')
INSERT [dbo].[PatientAnswers] ([AnsId], [AppPracticeId], [CollectionText], [CollectionImage], [CollectionAudio], [IsAttempted], [IsRight], [PatientSelectedText]) VALUES (103, 16, N'Rooster', N'Images/d1d7d389-e5d1-4bb7-ac36-4acf3c31305d_3239.jpg', N'Images/d609d9b0-e39c-41b5-94ac-b77de37993f6_0521.mp3', 0, 0, N'')
INSERT [dbo].[PatientAnswers] ([AnsId], [AppPracticeId], [CollectionText], [CollectionImage], [CollectionAudio], [IsAttempted], [IsRight], [PatientSelectedText]) VALUES (104, 16, N'Sparrow', N'Images/3405f899-375c-4c40-a257-86e2768bcceb_3252.jpg', N'Images/2a89112c-b54f-4edb-a720-8f2bdc89d97d_0534.mp3', 0, 0, N'')
INSERT [dbo].[PatientAnswers] ([AnsId], [AppPracticeId], [CollectionText], [CollectionImage], [CollectionAudio], [IsAttempted], [IsRight], [PatientSelectedText]) VALUES (105, 16, N'Swallow', N'Images/1b9b5cd1-2a3e-4dd6-99dd-addd0a768be1_3304.PNG', N'Images/9075af31-4a4f-42d2-863f-a55dc51716a3_0617.mp3', 0, 0, N'')
INSERT [dbo].[PatientAnswers] ([AnsId], [AppPracticeId], [CollectionText], [CollectionImage], [CollectionAudio], [IsAttempted], [IsRight], [PatientSelectedText]) VALUES (106, 17, N'Brightener', N'Images/9f9d998d-62b1-4e5e-b59e-c06fd9d57f35_0125.png', N'Images/a4a7c1ae-2bbc-4573-947d-ad4f6f3d5381_0354.mp3', 0, 0, N'')
INSERT [dbo].[PatientAnswers] ([AnsId], [AppPracticeId], [CollectionText], [CollectionImage], [CollectionAudio], [IsAttempted], [IsRight], [PatientSelectedText]) VALUES (107, 17, N'Brushes', N'Images/91194bff-fa32-4bc6-b087-58b5daf78114_0200.png', N'Images/a4a7c1ae-2bbc-4573-947d-ad4f6f3d5381_0354.mp3', 0, 0, N'')
INSERT [dbo].[PatientAnswers] ([AnsId], [AppPracticeId], [CollectionText], [CollectionImage], [CollectionAudio], [IsAttempted], [IsRight], [PatientSelectedText]) VALUES (108, 17, N'Cleanser', N'Images/c809a255-ed0e-4444-9630-c495013851f9_0220.png', N'Images/a4a7c1ae-2bbc-4573-947d-ad4f6f3d5381_0354.mp3', 0, 0, N'')
INSERT [dbo].[PatientAnswers] ([AnsId], [AppPracticeId], [CollectionText], [CollectionImage], [CollectionAudio], [IsAttempted], [IsRight], [PatientSelectedText]) VALUES (109, 17, N'Eyeshadow', N'Images/3512f559-1274-4d35-aef6-0077e7cbe95e_0239.png', N'Images/a4a7c1ae-2bbc-4573-947d-ad4f6f3d5381_0354.mp3', 0, 0, N'')
INSERT [dbo].[PatientAnswers] ([AnsId], [AppPracticeId], [CollectionText], [CollectionImage], [CollectionAudio], [IsAttempted], [IsRight], [PatientSelectedText]) VALUES (110, 17, N'Lipsticks', N'Images/b93aa523-6bbc-4b20-a9c2-15e3fc5ec0c4_0255.png', N'Images/a4a7c1ae-2bbc-4573-947d-ad4f6f3d5381_0354.mp3', 0, 0, N'')
INSERT [dbo].[PatientAnswers] ([AnsId], [AppPracticeId], [CollectionText], [CollectionImage], [CollectionAudio], [IsAttempted], [IsRight], [PatientSelectedText]) VALUES (111, 17, N'Make up Kit', N'Images/49ecea77-657c-4c03-a98d-70b90e4c28d1_0318.png', N'Images/a4a7c1ae-2bbc-4573-947d-ad4f6f3d5381_0354.mp3', 0, 0, N'')
INSERT [dbo].[PatientAnswers] ([AnsId], [AppPracticeId], [CollectionText], [CollectionImage], [CollectionAudio], [IsAttempted], [IsRight], [PatientSelectedText]) VALUES (112, 17, N'Mascara', N'Images/1b66fa60-7472-49ec-a1d2-67933f75153d_0354.png', N'Images/a4a7c1ae-2bbc-4573-947d-ad4f6f3d5381_0354.mp3', 0, 0, N'')
INSERT [dbo].[PatientAnswers] ([AnsId], [AppPracticeId], [CollectionText], [CollectionImage], [CollectionAudio], [IsAttempted], [IsRight], [PatientSelectedText]) VALUES (113, 17, N'Mirror', N'Images/7ce99308-fdc6-46fa-866c-56982297b51f_0421.png', N'Images/a4a7c1ae-2bbc-4573-947d-ad4f6f3d5381_0354.mp3', 0, 0, N'')
INSERT [dbo].[PatientAnswers] ([AnsId], [AppPracticeId], [CollectionText], [CollectionImage], [CollectionAudio], [IsAttempted], [IsRight], [PatientSelectedText]) VALUES (114, 17, N'Nail Polishes', N'Images/bce727ab-40c1-4b47-837f-73aa4c63f14b_0442.png', N'Images/a4a7c1ae-2bbc-4573-947d-ad4f6f3d5381_0354.mp3', 0, 0, N'')
INSERT [dbo].[PatientAnswers] ([AnsId], [AppPracticeId], [CollectionText], [CollectionImage], [CollectionAudio], [IsAttempted], [IsRight], [PatientSelectedText]) VALUES (115, 17, N'Toner', N'Images/cfa7c1c1-b368-49f3-b9e7-37a2bf8bc23d_0502.png', N'Images/a4a7c1ae-2bbc-4573-947d-ad4f6f3d5381_0354.mp3', 0, 0, N'')
INSERT [dbo].[PatientAnswers] ([AnsId], [AppPracticeId], [CollectionText], [CollectionImage], [CollectionAudio], [IsAttempted], [IsRight], [PatientSelectedText]) VALUES (116, 18, N'Camel', N'Images/d8d889fb-b8e6-4fc3-a296-4b35dc3d08f9_0705.jpg', N'Images/3e1bddbf-91ed-4cf2-9a20-ed04061267f3_4400.mp3', 0, 0, N'')
INSERT [dbo].[PatientAnswers] ([AnsId], [AppPracticeId], [CollectionText], [CollectionImage], [CollectionAudio], [IsAttempted], [IsRight], [PatientSelectedText]) VALUES (117, 18, N'Cat', N'Images/2f0e49ea-2e65-4d67-9767-35521e2a374b_0720.jpg', N'Images/6a23e612-080e-4f8f-b910-702728c12a9a_4415.mp3', 0, 0, N'')
INSERT [dbo].[PatientAnswers] ([AnsId], [AppPracticeId], [CollectionText], [CollectionImage], [CollectionAudio], [IsAttempted], [IsRight], [PatientSelectedText]) VALUES (118, 18, N'Cheetah', N'Images/8d2cc825-2c41-47bf-8615-e6128528b666_0736.PNG', N'Images/7d9b999d-f105-4ca6-9914-ea65ade204aa_4448.mp3', 0, 0, N'')
INSERT [dbo].[PatientAnswers] ([AnsId], [AppPracticeId], [CollectionText], [CollectionImage], [CollectionAudio], [IsAttempted], [IsRight], [PatientSelectedText]) VALUES (119, 18, N'Cow', N'Images/a94a4847-3ba6-4ce7-8bba-b9fdc5bde94c_0747.jpg', N'Images/bf182c3a-d8ec-4883-a8a7-92753b61dbd4_4501.mp3', 0, 0, N'')
INSERT [dbo].[PatientAnswers] ([AnsId], [AppPracticeId], [CollectionText], [CollectionImage], [CollectionAudio], [IsAttempted], [IsRight], [PatientSelectedText]) VALUES (120, 18, N'Dog', N'Images/122c2c58-9d7a-48b6-9ceb-3a7448f16e65_1157.jpg', N'Images/c990a0fa-d28d-4bfd-8c15-eb25c30b678b_4653.mp3', 0, 0, N'')
INSERT [dbo].[PatientAnswers] ([AnsId], [AppPracticeId], [CollectionText], [CollectionImage], [CollectionAudio], [IsAttempted], [IsRight], [PatientSelectedText]) VALUES (121, 18, N'Donkey', N'Images/76db8b84-102b-4840-a2e1-d60fe069678a_1219.jpg', N'Images/b7898e8d-5666-4557-99cf-ff93e48d71f4_5538.mp3', 0, 0, N'')
INSERT [dbo].[PatientAnswers] ([AnsId], [AppPracticeId], [CollectionText], [CollectionImage], [CollectionAudio], [IsAttempted], [IsRight], [PatientSelectedText]) VALUES (122, 18, N'Elephant', N'Images/4603a7b8-a0ee-4dbf-b7dd-26571caed231_1232.PNG', N'Images/f230f37d-31bd-48d4-8b00-89223f559517_5627.mp3', 0, 0, N'')
INSERT [dbo].[PatientAnswers] ([AnsId], [AppPracticeId], [CollectionText], [CollectionImage], [CollectionAudio], [IsAttempted], [IsRight], [PatientSelectedText]) VALUES (123, 18, N'Goat', N'Images/d7273921-f990-43b9-9ef2-dabc7d75923f_1240.jpg', N'Images/5259cebe-6b05-41be-a5d2-62cf4d60cd97_5647.mp3', 0, 0, N'')
INSERT [dbo].[PatientAnswers] ([AnsId], [AppPracticeId], [CollectionText], [CollectionImage], [CollectionAudio], [IsAttempted], [IsRight], [PatientSelectedText]) VALUES (124, 18, N'Lion', N'Images/25ce64b2-5b07-45e8-85c6-38deb8c02549_1250.jpg', N'Images/452e31ba-bb48-40eb-b028-493df848a32f_0033.mp3', 0, 0, N'')
INSERT [dbo].[PatientAnswers] ([AnsId], [AppPracticeId], [CollectionText], [CollectionImage], [CollectionAudio], [IsAttempted], [IsRight], [PatientSelectedText]) VALUES (125, 18, N'Rabbit', N'Images/7833d78e-a593-4cfa-8d5b-4295b5ac6043_1303.jpg', N'Images/77caef2d-b648-4f3c-abcc-eae39c870747_0120.mp3', 0, 0, N'')
INSERT [dbo].[PatientAnswers] ([AnsId], [AppPracticeId], [CollectionText], [CollectionImage], [CollectionAudio], [IsAttempted], [IsRight], [PatientSelectedText]) VALUES (126, 18, N'Zeebra', N'Images/28c2a6a4-e96b-49eb-9044-8c9c46dba7b0_1321.jpg', N'Images/d1b427ba-9500-47f3-b719-67eb146df304_0135.mp3', 0, 0, N'')
INSERT [dbo].[PatientAnswers] ([AnsId], [AppPracticeId], [CollectionText], [CollectionImage], [CollectionAudio], [IsAttempted], [IsRight], [PatientSelectedText]) VALUES (127, 19, N'Bat', N'Images/bcd46ec5-78f1-4bac-bf40-58cae5e8a297_3044.PNG', N'Images/e84a89a3-8ce2-4e14-96d9-d0217482c3b3_0145.mp3', 0, 0, N'')
INSERT [dbo].[PatientAnswers] ([AnsId], [AppPracticeId], [CollectionText], [CollectionImage], [CollectionAudio], [IsAttempted], [IsRight], [PatientSelectedText]) VALUES (128, 19, N'Crane', N'Images/07014e71-3d36-4b26-a56f-4a5d192a8d14_3053.PNG', N'Images/dd2a3895-c13f-4429-b756-ee39c2878df9_0158.mp3', 0, 0, N'')
INSERT [dbo].[PatientAnswers] ([AnsId], [AppPracticeId], [CollectionText], [CollectionImage], [CollectionAudio], [IsAttempted], [IsRight], [PatientSelectedText]) VALUES (129, 19, N'Crow', N'Images/93d084a5-6dd7-40c6-90c4-eab695146422_3104.PNG', N'Images/4414d646-36fe-4142-a5e2-d92ddbe93ee4_0221.mp3', 0, 0, N'')
INSERT [dbo].[PatientAnswers] ([AnsId], [AppPracticeId], [CollectionText], [CollectionImage], [CollectionAudio], [IsAttempted], [IsRight], [PatientSelectedText]) VALUES (130, 19, N'Duck', N'Images/75b567eb-6b88-4ab6-a6ea-a0cc08abdeca_3116.PNG', N'Images/f962a0c3-73c7-4e7d-92b4-f21847f8f46a_0239.mp3', 0, 0, N'')
INSERT [dbo].[PatientAnswers] ([AnsId], [AppPracticeId], [CollectionText], [CollectionImage], [CollectionAudio], [IsAttempted], [IsRight], [PatientSelectedText]) VALUES (131, 19, N'Falcon', N'Images/9975a96d-6417-49d5-b729-26c890b6dc37_3128.png', N'Images/bf93a15b-99a6-4cba-8a56-522ea4d4be90_0302.mp3', 0, 0, N'')
INSERT [dbo].[PatientAnswers] ([AnsId], [AppPracticeId], [CollectionText], [CollectionImage], [CollectionAudio], [IsAttempted], [IsRight], [PatientSelectedText]) VALUES (132, 19, N'Goose', N'Images/957080b0-3538-46d9-9ff4-5a36e66166e6_3138.PNG', N'Images/b3cbd9e9-8954-4dc4-a927-65fa33a73737_0342.mp3', 0, 0, N'')
INSERT [dbo].[PatientAnswers] ([AnsId], [AppPracticeId], [CollectionText], [CollectionImage], [CollectionAudio], [IsAttempted], [IsRight], [PatientSelectedText]) VALUES (133, 19, N'Hen', N'Images/5b6c67e3-47a8-43c1-bb1a-82ca7076c5ba_3147.jpg', N'Images/55d14a79-4703-405b-88d8-d93d29536a34_0356.mp3', 0, 0, N'')
INSERT [dbo].[PatientAnswers] ([AnsId], [AppPracticeId], [CollectionText], [CollectionImage], [CollectionAudio], [IsAttempted], [IsRight], [PatientSelectedText]) VALUES (134, 19, N'PeeCock', N'Images/8dc30fc8-a85e-40cb-b819-5b22c6ab0825_3204.jpg', N'Images/5c0e5ab9-3f7e-4668-8bb2-1c0b73c6cc4e_0415.mp3', 0, 0, N'')
INSERT [dbo].[PatientAnswers] ([AnsId], [AppPracticeId], [CollectionText], [CollectionImage], [CollectionAudio], [IsAttempted], [IsRight], [PatientSelectedText]) VALUES (135, 19, N'Perot', N'Images/d5576129-3e72-4c7e-845d-20732ae3b7be_3216.jpg', N'Images/2178c8f3-93f9-4c7c-8e54-a5f33ea704f9_0440.mp3', 0, 0, N'')
INSERT [dbo].[PatientAnswers] ([AnsId], [AppPracticeId], [CollectionText], [CollectionImage], [CollectionAudio], [IsAttempted], [IsRight], [PatientSelectedText]) VALUES (136, 19, N'Pigeon', N'Images/6f552ddc-eb52-49bf-9f8f-8154e9cfa7a5_3229.PNG', N'Images/4e7e014c-2267-4864-aa89-48676901bbae_0502.mp3', 0, 0, N'')
GO
INSERT [dbo].[PatientAnswers] ([AnsId], [AppPracticeId], [CollectionText], [CollectionImage], [CollectionAudio], [IsAttempted], [IsRight], [PatientSelectedText]) VALUES (137, 19, N'Rooster', N'Images/d1d7d389-e5d1-4bb7-ac36-4acf3c31305d_3239.jpg', N'Images/d609d9b0-e39c-41b5-94ac-b77de37993f6_0521.mp3', 0, 0, N'')
INSERT [dbo].[PatientAnswers] ([AnsId], [AppPracticeId], [CollectionText], [CollectionImage], [CollectionAudio], [IsAttempted], [IsRight], [PatientSelectedText]) VALUES (138, 19, N'Sparrow', N'Images/3405f899-375c-4c40-a257-86e2768bcceb_3252.jpg', N'Images/2a89112c-b54f-4edb-a720-8f2bdc89d97d_0534.mp3', 0, 0, N'')
INSERT [dbo].[PatientAnswers] ([AnsId], [AppPracticeId], [CollectionText], [CollectionImage], [CollectionAudio], [IsAttempted], [IsRight], [PatientSelectedText]) VALUES (139, 19, N'Swallow', N'Images/1b9b5cd1-2a3e-4dd6-99dd-addd0a768be1_3304.PNG', N'Images/9075af31-4a4f-42d2-863f-a55dc51716a3_0617.mp3', 0, 0, N'')
INSERT [dbo].[PatientAnswers] ([AnsId], [AppPracticeId], [CollectionText], [CollectionImage], [CollectionAudio], [IsAttempted], [IsRight], [PatientSelectedText]) VALUES (140, 20, N'Brightener', N'Images/9f9d998d-62b1-4e5e-b59e-c06fd9d57f35_0125.png', N'Images/a4a7c1ae-2bbc-4573-947d-ad4f6f3d5381_0354.mp3', 0, 0, N'')
INSERT [dbo].[PatientAnswers] ([AnsId], [AppPracticeId], [CollectionText], [CollectionImage], [CollectionAudio], [IsAttempted], [IsRight], [PatientSelectedText]) VALUES (141, 20, N'Brushes', N'Images/91194bff-fa32-4bc6-b087-58b5daf78114_0200.png', N'Images/a4a7c1ae-2bbc-4573-947d-ad4f6f3d5381_0354.mp3', 0, 0, N'')
INSERT [dbo].[PatientAnswers] ([AnsId], [AppPracticeId], [CollectionText], [CollectionImage], [CollectionAudio], [IsAttempted], [IsRight], [PatientSelectedText]) VALUES (142, 20, N'Cleanser', N'Images/c809a255-ed0e-4444-9630-c495013851f9_0220.png', N'Images/a4a7c1ae-2bbc-4573-947d-ad4f6f3d5381_0354.mp3', 0, 0, N'')
INSERT [dbo].[PatientAnswers] ([AnsId], [AppPracticeId], [CollectionText], [CollectionImage], [CollectionAudio], [IsAttempted], [IsRight], [PatientSelectedText]) VALUES (143, 20, N'Eyeshadow', N'Images/3512f559-1274-4d35-aef6-0077e7cbe95e_0239.png', N'Images/a4a7c1ae-2bbc-4573-947d-ad4f6f3d5381_0354.mp3', 0, 0, N'')
INSERT [dbo].[PatientAnswers] ([AnsId], [AppPracticeId], [CollectionText], [CollectionImage], [CollectionAudio], [IsAttempted], [IsRight], [PatientSelectedText]) VALUES (144, 20, N'Lipsticks', N'Images/b93aa523-6bbc-4b20-a9c2-15e3fc5ec0c4_0255.png', N'Images/a4a7c1ae-2bbc-4573-947d-ad4f6f3d5381_0354.mp3', 0, 0, N'')
INSERT [dbo].[PatientAnswers] ([AnsId], [AppPracticeId], [CollectionText], [CollectionImage], [CollectionAudio], [IsAttempted], [IsRight], [PatientSelectedText]) VALUES (145, 20, N'Make up Kit', N'Images/49ecea77-657c-4c03-a98d-70b90e4c28d1_0318.png', N'Images/a4a7c1ae-2bbc-4573-947d-ad4f6f3d5381_0354.mp3', 0, 0, N'')
INSERT [dbo].[PatientAnswers] ([AnsId], [AppPracticeId], [CollectionText], [CollectionImage], [CollectionAudio], [IsAttempted], [IsRight], [PatientSelectedText]) VALUES (146, 20, N'Mascara', N'Images/1b66fa60-7472-49ec-a1d2-67933f75153d_0354.png', N'Images/a4a7c1ae-2bbc-4573-947d-ad4f6f3d5381_0354.mp3', 0, 0, N'')
INSERT [dbo].[PatientAnswers] ([AnsId], [AppPracticeId], [CollectionText], [CollectionImage], [CollectionAudio], [IsAttempted], [IsRight], [PatientSelectedText]) VALUES (147, 20, N'Mirror', N'Images/7ce99308-fdc6-46fa-866c-56982297b51f_0421.png', N'Images/a4a7c1ae-2bbc-4573-947d-ad4f6f3d5381_0354.mp3', 0, 0, N'')
INSERT [dbo].[PatientAnswers] ([AnsId], [AppPracticeId], [CollectionText], [CollectionImage], [CollectionAudio], [IsAttempted], [IsRight], [PatientSelectedText]) VALUES (148, 20, N'Nail Polishes', N'Images/bce727ab-40c1-4b47-837f-73aa4c63f14b_0442.png', N'Images/a4a7c1ae-2bbc-4573-947d-ad4f6f3d5381_0354.mp3', 0, 0, N'')
INSERT [dbo].[PatientAnswers] ([AnsId], [AppPracticeId], [CollectionText], [CollectionImage], [CollectionAudio], [IsAttempted], [IsRight], [PatientSelectedText]) VALUES (149, 20, N'Toner', N'Images/cfa7c1c1-b368-49f3-b9e7-37a2bf8bc23d_0502.png', N'Images/a4a7c1ae-2bbc-4573-947d-ad4f6f3d5381_0354.mp3', 0, 0, N'')
INSERT [dbo].[PatientAnswers] ([AnsId], [AppPracticeId], [CollectionText], [CollectionImage], [CollectionAudio], [IsAttempted], [IsRight], [PatientSelectedText]) VALUES (150, 21, N'A', N'Images/b25b21e5-bc23-4553-8a30-3cfd00b14deb_3230.png', N'Images/603b1f18-7bff-440f-a90c-c6ecf95303ff_3550.mp3', 0, 0, N'')
INSERT [dbo].[PatientAnswers] ([AnsId], [AppPracticeId], [CollectionText], [CollectionImage], [CollectionAudio], [IsAttempted], [IsRight], [PatientSelectedText]) VALUES (151, 21, N'B', N'Images/b429729c-3881-4ff9-8275-1ce2800e2e7d_3243.jpg', N'Images/b29ee861-934e-46f1-b0bf-58acafc556c5_3602.mp3', 0, 0, N'')
INSERT [dbo].[PatientAnswers] ([AnsId], [AppPracticeId], [CollectionText], [CollectionImage], [CollectionAudio], [IsAttempted], [IsRight], [PatientSelectedText]) VALUES (152, 21, N'C', N'Images/d1391189-06be-4da4-9baf-8e03dd52ffbd_3253.png', N'Images/edca99ec-de51-4d04-a53c-03a08130540f_3614.mp3', 0, 0, N'')
INSERT [dbo].[PatientAnswers] ([AnsId], [AppPracticeId], [CollectionText], [CollectionImage], [CollectionAudio], [IsAttempted], [IsRight], [PatientSelectedText]) VALUES (153, 21, N'D', N'Images/99dd7a58-a979-4aab-bc5f-bfd2fa263ad0_3929.jpg', N'Images/4f8b5b5f-16cc-4ce5-9017-02e18b38d788_3633.mp3', 0, 0, N'')
INSERT [dbo].[PatientAnswers] ([AnsId], [AppPracticeId], [CollectionText], [CollectionImage], [CollectionAudio], [IsAttempted], [IsRight], [PatientSelectedText]) VALUES (154, 21, N'E', N'Images/323b9c71-34c3-4a54-b8e0-f1c2f1bac919_3943.jpg', N'Images/5691c680-db69-429f-8547-3090436c79a3_3644.mp3', 0, 0, N'')
INSERT [dbo].[PatientAnswers] ([AnsId], [AppPracticeId], [CollectionText], [CollectionImage], [CollectionAudio], [IsAttempted], [IsRight], [PatientSelectedText]) VALUES (155, 21, N'G', N'Images/307a31cf-8686-4ec9-b6d4-c9be6b92f675_3953.jpg', N'Images/1f0f6bbd-5316-4b8f-8de9-432e464a582e_3654.mp3', 0, 0, N'')
INSERT [dbo].[PatientAnswers] ([AnsId], [AppPracticeId], [CollectionText], [CollectionImage], [CollectionAudio], [IsAttempted], [IsRight], [PatientSelectedText]) VALUES (156, 22, N'Apple', N'Images/44112053-21a5-47d5-8fc2-f649af41bcc3_3309.jpg', N'Images/a68843b3-7ca9-4f26-b372-319083c289ad_3714.mp3', 0, 0, N'')
INSERT [dbo].[PatientAnswers] ([AnsId], [AppPracticeId], [CollectionText], [CollectionImage], [CollectionAudio], [IsAttempted], [IsRight], [PatientSelectedText]) VALUES (157, 22, N'Dates', N'Images/b530ff34-9bb0-43fd-b2cf-57de0a7ce15b_3339.jpg', N'Images/0a2941d0-0753-44db-82bf-3aa2526ff8f2_3741.mp3', 0, 0, N'')
INSERT [dbo].[PatientAnswers] ([AnsId], [AppPracticeId], [CollectionText], [CollectionImage], [CollectionAudio], [IsAttempted], [IsRight], [PatientSelectedText]) VALUES (158, 22, N'Melon', N'Images/49006d54-6278-47fd-bd61-8cea22545f58_3412.jpg', N'Images/d5c7ad42-0a2a-4327-9850-dc8011ac3b7d_3803.mp3', 0, 0, N'')
INSERT [dbo].[PatientAnswers] ([AnsId], [AppPracticeId], [CollectionText], [CollectionImage], [CollectionAudio], [IsAttempted], [IsRight], [PatientSelectedText]) VALUES (159, 22, N'Banana', N'Images/f5e468f1-19a6-4381-b7b2-ef3d6dd69c9f_3327.jpg', N'Images/2c021493-6655-41e4-9afb-55f3dbd7ed3a_3725.mp3', 0, 0, N'')
INSERT [dbo].[PatientAnswers] ([AnsId], [AppPracticeId], [CollectionText], [CollectionImage], [CollectionAudio], [IsAttempted], [IsRight], [PatientSelectedText]) VALUES (160, 22, N'Grapes', N'Images/c1281485-9d08-4ccd-a264-a0c5eba0e533_3437.jpg', N'Images/71aaf50d-ae09-4b33-8f99-34055996670f_3819.mp3', 0, 0, N'')
INSERT [dbo].[PatientAnswers] ([AnsId], [AppPracticeId], [CollectionText], [CollectionImage], [CollectionAudio], [IsAttempted], [IsRight], [PatientSelectedText]) VALUES (161, 23, N'Bag', N'Images/b0e23911-7faf-4a5b-9b84-3e5fac18504c_5036.PNG', N'Images/c2a8f35a-a9e8-4fdc-8bfb-026466b37a7c_4037.mp3', 0, 0, N'')
INSERT [dbo].[PatientAnswers] ([AnsId], [AppPracticeId], [CollectionText], [CollectionImage], [CollectionAudio], [IsAttempted], [IsRight], [PatientSelectedText]) VALUES (162, 23, N'Note Books', N'Images/38241365-c4c6-4fc1-a34e-e75b425ac542_5107.PNG', N'Images/89d20a4a-7fb3-4924-9a8d-0244ab2414fe_4105.mp3', 0, 0, N'')
INSERT [dbo].[PatientAnswers] ([AnsId], [AppPracticeId], [CollectionText], [CollectionImage], [CollectionAudio], [IsAttempted], [IsRight], [PatientSelectedText]) VALUES (163, 23, N'Black Board', N'Images/4ccb4954-5169-4c05-aae7-365bb677d4f7_5125.PNG', N'Images/a4a7c1ae-2bbc-4573-947d-ad4f6f3d5381_0354.mp3', 0, 0, N'')
INSERT [dbo].[PatientAnswers] ([AnsId], [AppPracticeId], [CollectionText], [CollectionImage], [CollectionAudio], [IsAttempted], [IsRight], [PatientSelectedText]) VALUES (164, 23, N'Chair', N'Images/901c7f80-63a9-492d-bf8e-692aad865a7c_5146.jpg', N'Images/a4a7c1ae-2bbc-4573-947d-ad4f6f3d5381_0354.mp3', 0, 0, N'')
INSERT [dbo].[PatientAnswers] ([AnsId], [AppPracticeId], [CollectionText], [CollectionImage], [CollectionAudio], [IsAttempted], [IsRight], [PatientSelectedText]) VALUES (165, 23, N'Class Room', N'Images/23177a54-29e1-4bd5-933c-ed9e782defb7_0648.PNG', N'Images/a4a7c1ae-2bbc-4573-947d-ad4f6f3d5381_0354.mp3', 0, 0, N'')
INSERT [dbo].[PatientAnswers] ([AnsId], [AppPracticeId], [CollectionText], [CollectionImage], [CollectionAudio], [IsAttempted], [IsRight], [PatientSelectedText]) VALUES (166, 23, N'Desk', N'Images/09037722-0169-45b2-9a0a-e3f468df0c40_0712.jpg', N'Images/b21d5c8d-3811-4237-b7c8-66d2ce5a80c3_4206.mp3', 0, 0, N'')
INSERT [dbo].[PatientAnswers] ([AnsId], [AppPracticeId], [CollectionText], [CollectionImage], [CollectionAudio], [IsAttempted], [IsRight], [PatientSelectedText]) VALUES (167, 23, N'Eraser', N'Images/e9d4e832-d9c6-47ba-8aad-42627357fc52_0726.PNG', N'Images/2ba7e37b-a8da-4d8d-9bd5-1aed271a8a41_0323.mp3', 0, 0, N'')
INSERT [dbo].[PatientAnswers] ([AnsId], [AppPracticeId], [CollectionText], [CollectionImage], [CollectionAudio], [IsAttempted], [IsRight], [PatientSelectedText]) VALUES (168, 23, N'ink', N'Images/3245ae7a-8898-4545-a2cc-d4e0e4641ff0_0743.PNG', N'Images/7ad8ea12-9a58-422b-90e8-4f2bf0755ba2_4239.mp3', 0, 0, N'')
INSERT [dbo].[PatientAnswers] ([AnsId], [AppPracticeId], [CollectionText], [CollectionImage], [CollectionAudio], [IsAttempted], [IsRight], [PatientSelectedText]) VALUES (169, 23, N'Pen', N'Images/e557b056-1ee9-4688-9c60-5bb5cf64eb9d_0809.jpg', N'Images/74e320c3-78f1-4fe0-bb3d-a6c9d00ecf77_4254.mp3', 1, 0, N'Pencils')
INSERT [dbo].[PatientAnswers] ([AnsId], [AppPracticeId], [CollectionText], [CollectionImage], [CollectionAudio], [IsAttempted], [IsRight], [PatientSelectedText]) VALUES (170, 23, N'Pencil Box', N'Images/5059b6d3-9339-4043-87da-288cea814c19_0825.PNG', N'Images/ece884a6-e1f2-41d4-a986-e262f332566d_4312.mp3', 0, 0, N'')
INSERT [dbo].[PatientAnswers] ([AnsId], [AppPracticeId], [CollectionText], [CollectionImage], [CollectionAudio], [IsAttempted], [IsRight], [PatientSelectedText]) VALUES (171, 23, N'Pencils', N'Images/a1f00b8e-3267-4cad-aeea-cc97768300bc_0837.jpg', N'Images/6e20d051-b482-44f5-8ac2-a5bde77393f0_4329.mp3', 0, 0, N'')
INSERT [dbo].[PatientAnswers] ([AnsId], [AppPracticeId], [CollectionText], [CollectionImage], [CollectionAudio], [IsAttempted], [IsRight], [PatientSelectedText]) VALUES (172, 23, N'Sharpners', N'Images/a31ef66c-339c-4ddb-97a4-b29740b45afb_0852.PNG', N'Images/6f2ddc58-059e-4658-88be-b026836dceb9_4346.mp3', 0, 0, N'')
INSERT [dbo].[PatientAnswers] ([AnsId], [AppPracticeId], [CollectionText], [CollectionImage], [CollectionAudio], [IsAttempted], [IsRight], [PatientSelectedText]) VALUES (173, 23, N'White Board', N'Images/b80a78bf-9331-490f-98c6-906a8116bffb_0911.jpg', N'Images/a4a7c1ae-2bbc-4573-947d-ad4f6f3d5381_0354.mp3', 0, 0, N'')
SET IDENTITY_INSERT [dbo].[PatientAnswers] OFF
GO
SET IDENTITY_INSERT [dbo].[PatientAttendants] ON 

INSERT [dbo].[PatientAttendants] ([PatientAttendantId], [PatientId], [AttendantId]) VALUES (1, 4006, 4012)
INSERT [dbo].[PatientAttendants] ([PatientAttendantId], [PatientId], [AttendantId]) VALUES (2, 4007, 4012)
SET IDENTITY_INSERT [dbo].[PatientAttendants] OFF
GO
SET IDENTITY_INSERT [dbo].[Practice] ON 

INSERT [dbo].[Practice] ([PracticeId], [PracticeTitle], [PracticeLevel], [DoctorId]) VALUES (1013, N'Alphabets', 1, 1)
INSERT [dbo].[Practice] ([PracticeId], [PracticeTitle], [PracticeLevel], [DoctorId]) VALUES (1014, N'Fruits', 1, 1)
INSERT [dbo].[Practice] ([PracticeId], [PracticeTitle], [PracticeLevel], [DoctorId]) VALUES (1015, N'School Items', 1, 1)
INSERT [dbo].[Practice] ([PracticeId], [PracticeTitle], [PracticeLevel], [DoctorId]) VALUES (1016, N'Animals', 2, 1)
INSERT [dbo].[Practice] ([PracticeId], [PracticeTitle], [PracticeLevel], [DoctorId]) VALUES (1017, N'Birds', 2, 1)
INSERT [dbo].[Practice] ([PracticeId], [PracticeTitle], [PracticeLevel], [DoctorId]) VALUES (1018, N'Cosmetic', 2, 1)
INSERT [dbo].[Practice] ([PracticeId], [PracticeTitle], [PracticeLevel], [DoctorId]) VALUES (1019, N'On Table', 3, 1)
INSERT [dbo].[Practice] ([PracticeId], [PracticeTitle], [PracticeLevel], [DoctorId]) VALUES (1020, N'Watching', 3, 1)
INSERT [dbo].[Practice] ([PracticeId], [PracticeTitle], [PracticeLevel], [DoctorId]) VALUES (1021, N'Going To', 3, 1)
INSERT [dbo].[Practice] ([PracticeId], [PracticeTitle], [PracticeLevel], [DoctorId]) VALUES (1022, N'Eating', 3, 1)
INSERT [dbo].[Practice] ([PracticeId], [PracticeTitle], [PracticeLevel], [DoctorId]) VALUES (1023, N'Playing', 3, 1)
INSERT [dbo].[Practice] ([PracticeId], [PracticeTitle], [PracticeLevel], [DoctorId]) VALUES (1024, N'Vegetables', 2, 1)
INSERT [dbo].[Practice] ([PracticeId], [PracticeTitle], [PracticeLevel], [DoctorId]) VALUES (1025, N'Electronics', 2, 1)
INSERT [dbo].[Practice] ([PracticeId], [PracticeTitle], [PracticeLevel], [DoctorId]) VALUES (1026, N'Mixed Sentences', 1, 1)
SET IDENTITY_INSERT [dbo].[Practice] OFF
GO
SET IDENTITY_INSERT [dbo].[PracticeCollection] ON 

INSERT [dbo].[PracticeCollection] ([PracticeCollectionId], [PracticeId], [CollectionId]) VALUES (1016, 1013, 1020)
INSERT [dbo].[PracticeCollection] ([PracticeCollectionId], [PracticeId], [CollectionId]) VALUES (1017, 1013, 1021)
INSERT [dbo].[PracticeCollection] ([PracticeCollectionId], [PracticeId], [CollectionId]) VALUES (1018, 1013, 1022)
INSERT [dbo].[PracticeCollection] ([PracticeCollectionId], [PracticeId], [CollectionId]) VALUES (1019, 1013, 1030)
INSERT [dbo].[PracticeCollection] ([PracticeCollectionId], [PracticeId], [CollectionId]) VALUES (1020, 1013, 1031)
INSERT [dbo].[PracticeCollection] ([PracticeCollectionId], [PracticeId], [CollectionId]) VALUES (1021, 1013, 1032)
INSERT [dbo].[PracticeCollection] ([PracticeCollectionId], [PracticeId], [CollectionId]) VALUES (1022, 1014, 1023)
INSERT [dbo].[PracticeCollection] ([PracticeCollectionId], [PracticeId], [CollectionId]) VALUES (1023, 1014, 1025)
INSERT [dbo].[PracticeCollection] ([PracticeCollectionId], [PracticeId], [CollectionId]) VALUES (1024, 1014, 1026)
INSERT [dbo].[PracticeCollection] ([PracticeCollectionId], [PracticeId], [CollectionId]) VALUES (1025, 1014, 1024)
INSERT [dbo].[PracticeCollection] ([PracticeCollectionId], [PracticeId], [CollectionId]) VALUES (1026, 1014, 1027)
INSERT [dbo].[PracticeCollection] ([PracticeCollectionId], [PracticeId], [CollectionId]) VALUES (1027, 1015, 1035)
INSERT [dbo].[PracticeCollection] ([PracticeCollectionId], [PracticeId], [CollectionId]) VALUES (1028, 1015, 1036)
INSERT [dbo].[PracticeCollection] ([PracticeCollectionId], [PracticeId], [CollectionId]) VALUES (1029, 1015, 1037)
INSERT [dbo].[PracticeCollection] ([PracticeCollectionId], [PracticeId], [CollectionId]) VALUES (1030, 1015, 1038)
INSERT [dbo].[PracticeCollection] ([PracticeCollectionId], [PracticeId], [CollectionId]) VALUES (1031, 1015, 1039)
INSERT [dbo].[PracticeCollection] ([PracticeCollectionId], [PracticeId], [CollectionId]) VALUES (1032, 1015, 1040)
INSERT [dbo].[PracticeCollection] ([PracticeCollectionId], [PracticeId], [CollectionId]) VALUES (1033, 1015, 1041)
INSERT [dbo].[PracticeCollection] ([PracticeCollectionId], [PracticeId], [CollectionId]) VALUES (1034, 1015, 1042)
INSERT [dbo].[PracticeCollection] ([PracticeCollectionId], [PracticeId], [CollectionId]) VALUES (1035, 1015, 1043)
INSERT [dbo].[PracticeCollection] ([PracticeCollectionId], [PracticeId], [CollectionId]) VALUES (1036, 1015, 1044)
INSERT [dbo].[PracticeCollection] ([PracticeCollectionId], [PracticeId], [CollectionId]) VALUES (1037, 1015, 1045)
INSERT [dbo].[PracticeCollection] ([PracticeCollectionId], [PracticeId], [CollectionId]) VALUES (1038, 1015, 1046)
INSERT [dbo].[PracticeCollection] ([PracticeCollectionId], [PracticeId], [CollectionId]) VALUES (1039, 1015, 1047)
INSERT [dbo].[PracticeCollection] ([PracticeCollectionId], [PracticeId], [CollectionId]) VALUES (1040, 1016, 1048)
INSERT [dbo].[PracticeCollection] ([PracticeCollectionId], [PracticeId], [CollectionId]) VALUES (1041, 1016, 1049)
INSERT [dbo].[PracticeCollection] ([PracticeCollectionId], [PracticeId], [CollectionId]) VALUES (1042, 1016, 1050)
INSERT [dbo].[PracticeCollection] ([PracticeCollectionId], [PracticeId], [CollectionId]) VALUES (1043, 1016, 1051)
INSERT [dbo].[PracticeCollection] ([PracticeCollectionId], [PracticeId], [CollectionId]) VALUES (1044, 1016, 1052)
INSERT [dbo].[PracticeCollection] ([PracticeCollectionId], [PracticeId], [CollectionId]) VALUES (1045, 1016, 1053)
INSERT [dbo].[PracticeCollection] ([PracticeCollectionId], [PracticeId], [CollectionId]) VALUES (1046, 1016, 1054)
INSERT [dbo].[PracticeCollection] ([PracticeCollectionId], [PracticeId], [CollectionId]) VALUES (1047, 1016, 1055)
INSERT [dbo].[PracticeCollection] ([PracticeCollectionId], [PracticeId], [CollectionId]) VALUES (1048, 1016, 1056)
INSERT [dbo].[PracticeCollection] ([PracticeCollectionId], [PracticeId], [CollectionId]) VALUES (1049, 1016, 1057)
INSERT [dbo].[PracticeCollection] ([PracticeCollectionId], [PracticeId], [CollectionId]) VALUES (1050, 1016, 1058)
INSERT [dbo].[PracticeCollection] ([PracticeCollectionId], [PracticeId], [CollectionId]) VALUES (1051, 1017, 1059)
INSERT [dbo].[PracticeCollection] ([PracticeCollectionId], [PracticeId], [CollectionId]) VALUES (1052, 1017, 1060)
INSERT [dbo].[PracticeCollection] ([PracticeCollectionId], [PracticeId], [CollectionId]) VALUES (1053, 1017, 1061)
INSERT [dbo].[PracticeCollection] ([PracticeCollectionId], [PracticeId], [CollectionId]) VALUES (1054, 1017, 1062)
INSERT [dbo].[PracticeCollection] ([PracticeCollectionId], [PracticeId], [CollectionId]) VALUES (1055, 1017, 1063)
INSERT [dbo].[PracticeCollection] ([PracticeCollectionId], [PracticeId], [CollectionId]) VALUES (1056, 1017, 1064)
INSERT [dbo].[PracticeCollection] ([PracticeCollectionId], [PracticeId], [CollectionId]) VALUES (1057, 1017, 1065)
INSERT [dbo].[PracticeCollection] ([PracticeCollectionId], [PracticeId], [CollectionId]) VALUES (1058, 1017, 1066)
INSERT [dbo].[PracticeCollection] ([PracticeCollectionId], [PracticeId], [CollectionId]) VALUES (1059, 1017, 1067)
INSERT [dbo].[PracticeCollection] ([PracticeCollectionId], [PracticeId], [CollectionId]) VALUES (1060, 1017, 1068)
INSERT [dbo].[PracticeCollection] ([PracticeCollectionId], [PracticeId], [CollectionId]) VALUES (1061, 1017, 1069)
INSERT [dbo].[PracticeCollection] ([PracticeCollectionId], [PracticeId], [CollectionId]) VALUES (1062, 1017, 1070)
INSERT [dbo].[PracticeCollection] ([PracticeCollectionId], [PracticeId], [CollectionId]) VALUES (1063, 1017, 1071)
INSERT [dbo].[PracticeCollection] ([PracticeCollectionId], [PracticeId], [CollectionId]) VALUES (1066, 1019, 1073)
INSERT [dbo].[PracticeCollection] ([PracticeCollectionId], [PracticeId], [CollectionId]) VALUES (1067, 1019, 1028)
INSERT [dbo].[PracticeCollection] ([PracticeCollectionId], [PracticeId], [CollectionId]) VALUES (1068, 1019, 1029)
INSERT [dbo].[PracticeCollection] ([PracticeCollectionId], [PracticeId], [CollectionId]) VALUES (1069, 1020, 1092)
INSERT [dbo].[PracticeCollection] ([PracticeCollectionId], [PracticeId], [CollectionId]) VALUES (1070, 1020, 1091)
INSERT [dbo].[PracticeCollection] ([PracticeCollectionId], [PracticeId], [CollectionId]) VALUES (1071, 1020, 1090)
INSERT [dbo].[PracticeCollection] ([PracticeCollectionId], [PracticeId], [CollectionId]) VALUES (1072, 1020, 1089)
INSERT [dbo].[PracticeCollection] ([PracticeCollectionId], [PracticeId], [CollectionId]) VALUES (1073, 1021, 1074)
INSERT [dbo].[PracticeCollection] ([PracticeCollectionId], [PracticeId], [CollectionId]) VALUES (1074, 1021, 1075)
INSERT [dbo].[PracticeCollection] ([PracticeCollectionId], [PracticeId], [CollectionId]) VALUES (1075, 1021, 1076)
INSERT [dbo].[PracticeCollection] ([PracticeCollectionId], [PracticeId], [CollectionId]) VALUES (1076, 1021, 1077)
INSERT [dbo].[PracticeCollection] ([PracticeCollectionId], [PracticeId], [CollectionId]) VALUES (1077, 1022, 1078)
INSERT [dbo].[PracticeCollection] ([PracticeCollectionId], [PracticeId], [CollectionId]) VALUES (1078, 1022, 1079)
INSERT [dbo].[PracticeCollection] ([PracticeCollectionId], [PracticeId], [CollectionId]) VALUES (1079, 1022, 1080)
INSERT [dbo].[PracticeCollection] ([PracticeCollectionId], [PracticeId], [CollectionId]) VALUES (1080, 1022, 1081)
INSERT [dbo].[PracticeCollection] ([PracticeCollectionId], [PracticeId], [CollectionId]) VALUES (1081, 1019, 1082)
INSERT [dbo].[PracticeCollection] ([PracticeCollectionId], [PracticeId], [CollectionId]) VALUES (1082, 1019, 1083)
INSERT [dbo].[PracticeCollection] ([PracticeCollectionId], [PracticeId], [CollectionId]) VALUES (1083, 1019, 1084)
INSERT [dbo].[PracticeCollection] ([PracticeCollectionId], [PracticeId], [CollectionId]) VALUES (1084, 1023, 1085)
INSERT [dbo].[PracticeCollection] ([PracticeCollectionId], [PracticeId], [CollectionId]) VALUES (1085, 1023, 1086)
INSERT [dbo].[PracticeCollection] ([PracticeCollectionId], [PracticeId], [CollectionId]) VALUES (1086, 1023, 1087)
INSERT [dbo].[PracticeCollection] ([PracticeCollectionId], [PracticeId], [CollectionId]) VALUES (1087, 1023, 1088)
INSERT [dbo].[PracticeCollection] ([PracticeCollectionId], [PracticeId], [CollectionId]) VALUES (1088, 1024, 1093)
INSERT [dbo].[PracticeCollection] ([PracticeCollectionId], [PracticeId], [CollectionId]) VALUES (1089, 1024, 1094)
INSERT [dbo].[PracticeCollection] ([PracticeCollectionId], [PracticeId], [CollectionId]) VALUES (1090, 1024, 1095)
INSERT [dbo].[PracticeCollection] ([PracticeCollectionId], [PracticeId], [CollectionId]) VALUES (1091, 1024, 1096)
INSERT [dbo].[PracticeCollection] ([PracticeCollectionId], [PracticeId], [CollectionId]) VALUES (1092, 1024, 1097)
INSERT [dbo].[PracticeCollection] ([PracticeCollectionId], [PracticeId], [CollectionId]) VALUES (1093, 1024, 1098)
INSERT [dbo].[PracticeCollection] ([PracticeCollectionId], [PracticeId], [CollectionId]) VALUES (1094, 1024, 1099)
INSERT [dbo].[PracticeCollection] ([PracticeCollectionId], [PracticeId], [CollectionId]) VALUES (1095, 1024, 1100)
INSERT [dbo].[PracticeCollection] ([PracticeCollectionId], [PracticeId], [CollectionId]) VALUES (1096, 1024, 1101)
INSERT [dbo].[PracticeCollection] ([PracticeCollectionId], [PracticeId], [CollectionId]) VALUES (1097, 1024, 1102)
INSERT [dbo].[PracticeCollection] ([PracticeCollectionId], [PracticeId], [CollectionId]) VALUES (1098, 1024, 1103)
INSERT [dbo].[PracticeCollection] ([PracticeCollectionId], [PracticeId], [CollectionId]) VALUES (1099, 1024, 1104)
INSERT [dbo].[PracticeCollection] ([PracticeCollectionId], [PracticeId], [CollectionId]) VALUES (1100, 1025, 1105)
INSERT [dbo].[PracticeCollection] ([PracticeCollectionId], [PracticeId], [CollectionId]) VALUES (1101, 1025, 1106)
INSERT [dbo].[PracticeCollection] ([PracticeCollectionId], [PracticeId], [CollectionId]) VALUES (1102, 1025, 1107)
INSERT [dbo].[PracticeCollection] ([PracticeCollectionId], [PracticeId], [CollectionId]) VALUES (1103, 1025, 1108)
INSERT [dbo].[PracticeCollection] ([PracticeCollectionId], [PracticeId], [CollectionId]) VALUES (1104, 1025, 1109)
INSERT [dbo].[PracticeCollection] ([PracticeCollectionId], [PracticeId], [CollectionId]) VALUES (1105, 1025, 1110)
INSERT [dbo].[PracticeCollection] ([PracticeCollectionId], [PracticeId], [CollectionId]) VALUES (1106, 1025, 1111)
INSERT [dbo].[PracticeCollection] ([PracticeCollectionId], [PracticeId], [CollectionId]) VALUES (1107, 1025, 1112)
INSERT [dbo].[PracticeCollection] ([PracticeCollectionId], [PracticeId], [CollectionId]) VALUES (1108, 1025, 1113)
INSERT [dbo].[PracticeCollection] ([PracticeCollectionId], [PracticeId], [CollectionId]) VALUES (1109, 1025, 1114)
INSERT [dbo].[PracticeCollection] ([PracticeCollectionId], [PracticeId], [CollectionId]) VALUES (1111, 1018, 1116)
INSERT [dbo].[PracticeCollection] ([PracticeCollectionId], [PracticeId], [CollectionId]) VALUES (1112, 1018, 1117)
INSERT [dbo].[PracticeCollection] ([PracticeCollectionId], [PracticeId], [CollectionId]) VALUES (1113, 1018, 1118)
INSERT [dbo].[PracticeCollection] ([PracticeCollectionId], [PracticeId], [CollectionId]) VALUES (1114, 1018, 1119)
INSERT [dbo].[PracticeCollection] ([PracticeCollectionId], [PracticeId], [CollectionId]) VALUES (1115, 1018, 1120)
INSERT [dbo].[PracticeCollection] ([PracticeCollectionId], [PracticeId], [CollectionId]) VALUES (1116, 1018, 1121)
INSERT [dbo].[PracticeCollection] ([PracticeCollectionId], [PracticeId], [CollectionId]) VALUES (1117, 1018, 1122)
GO
INSERT [dbo].[PracticeCollection] ([PracticeCollectionId], [PracticeId], [CollectionId]) VALUES (1118, 1018, 1123)
INSERT [dbo].[PracticeCollection] ([PracticeCollectionId], [PracticeId], [CollectionId]) VALUES (1119, 1018, 1124)
INSERT [dbo].[PracticeCollection] ([PracticeCollectionId], [PracticeId], [CollectionId]) VALUES (1120, 1018, 1125)
INSERT [dbo].[PracticeCollection] ([PracticeCollectionId], [PracticeId], [CollectionId]) VALUES (1121, 1026, 1029)
INSERT [dbo].[PracticeCollection] ([PracticeCollectionId], [PracticeId], [CollectionId]) VALUES (1122, 1026, 1028)
INSERT [dbo].[PracticeCollection] ([PracticeCollectionId], [PracticeId], [CollectionId]) VALUES (1123, 1026, 1073)
INSERT [dbo].[PracticeCollection] ([PracticeCollectionId], [PracticeId], [CollectionId]) VALUES (1124, 1026, 1074)
INSERT [dbo].[PracticeCollection] ([PracticeCollectionId], [PracticeId], [CollectionId]) VALUES (1125, 1026, 1075)
INSERT [dbo].[PracticeCollection] ([PracticeCollectionId], [PracticeId], [CollectionId]) VALUES (1126, 1026, 1076)
INSERT [dbo].[PracticeCollection] ([PracticeCollectionId], [PracticeId], [CollectionId]) VALUES (1127, 1026, 1077)
INSERT [dbo].[PracticeCollection] ([PracticeCollectionId], [PracticeId], [CollectionId]) VALUES (1128, 1026, 1078)
INSERT [dbo].[PracticeCollection] ([PracticeCollectionId], [PracticeId], [CollectionId]) VALUES (1129, 1026, 1079)
INSERT [dbo].[PracticeCollection] ([PracticeCollectionId], [PracticeId], [CollectionId]) VALUES (1130, 1026, 1080)
INSERT [dbo].[PracticeCollection] ([PracticeCollectionId], [PracticeId], [CollectionId]) VALUES (1131, 1026, 1082)
INSERT [dbo].[PracticeCollection] ([PracticeCollectionId], [PracticeId], [CollectionId]) VALUES (1132, 1026, 1081)
INSERT [dbo].[PracticeCollection] ([PracticeCollectionId], [PracticeId], [CollectionId]) VALUES (1133, 1026, 1083)
INSERT [dbo].[PracticeCollection] ([PracticeCollectionId], [PracticeId], [CollectionId]) VALUES (1134, 1026, 1084)
INSERT [dbo].[PracticeCollection] ([PracticeCollectionId], [PracticeId], [CollectionId]) VALUES (1135, 1027, 1020)
INSERT [dbo].[PracticeCollection] ([PracticeCollectionId], [PracticeId], [CollectionId]) VALUES (1136, 1027, 1021)
INSERT [dbo].[PracticeCollection] ([PracticeCollectionId], [PracticeId], [CollectionId]) VALUES (1137, 1027, 1022)
INSERT [dbo].[PracticeCollection] ([PracticeCollectionId], [PracticeId], [CollectionId]) VALUES (1138, 1027, 1030)
INSERT [dbo].[PracticeCollection] ([PracticeCollectionId], [PracticeId], [CollectionId]) VALUES (1139, 1028, 1020)
INSERT [dbo].[PracticeCollection] ([PracticeCollectionId], [PracticeId], [CollectionId]) VALUES (1140, 1028, 1022)
INSERT [dbo].[PracticeCollection] ([PracticeCollectionId], [PracticeId], [CollectionId]) VALUES (1141, 1028, 1030)
INSERT [dbo].[PracticeCollection] ([PracticeCollectionId], [PracticeId], [CollectionId]) VALUES (1142, 1028, 1021)
INSERT [dbo].[PracticeCollection] ([PracticeCollectionId], [PracticeId], [CollectionId]) VALUES (1143, 1029, 1020)
INSERT [dbo].[PracticeCollection] ([PracticeCollectionId], [PracticeId], [CollectionId]) VALUES (1144, 1029, 1021)
INSERT [dbo].[PracticeCollection] ([PracticeCollectionId], [PracticeId], [CollectionId]) VALUES (1145, 1029, 1022)
INSERT [dbo].[PracticeCollection] ([PracticeCollectionId], [PracticeId], [CollectionId]) VALUES (1146, 1029, 1030)
INSERT [dbo].[PracticeCollection] ([PracticeCollectionId], [PracticeId], [CollectionId]) VALUES (1147, 1030, 1022)
INSERT [dbo].[PracticeCollection] ([PracticeCollectionId], [PracticeId], [CollectionId]) VALUES (1148, 1030, 1020)
INSERT [dbo].[PracticeCollection] ([PracticeCollectionId], [PracticeId], [CollectionId]) VALUES (1149, 1030, 1021)
INSERT [dbo].[PracticeCollection] ([PracticeCollectionId], [PracticeId], [CollectionId]) VALUES (1150, 1030, 1030)
SET IDENTITY_INSERT [dbo].[PracticeCollection] OFF
GO
SET IDENTITY_INSERT [dbo].[ReferredPatient] ON 

INSERT [dbo].[ReferredPatient] ([ReferId], [PatientId], [FromDoctorId], [ToDoctorId]) VALUES (1, 1008, 1, 5)
SET IDENTITY_INSERT [dbo].[ReferredPatient] OFF
GO
SET IDENTITY_INSERT [dbo].[Users] ON 

INSERT [dbo].[Users] ([UserId], [UserName], [UserPhone], [UserGender], [UserPassword], [UserDOB], [IsApproved], [UserRole], [ReferenceUserId]) VALUES (1, N'Zahra', N'03433333356', N'Female', N'123456', CAST(N'2021-10-20T11:25:30.537' AS DateTime), 1, N'Doctor', 0)
INSERT [dbo].[Users] ([UserId], [UserName], [UserPhone], [UserGender], [UserPassword], [UserDOB], [IsApproved], [UserRole], [ReferenceUserId]) VALUES (2, N'Iqra', N'03433333356', N'Female', N'123456', CAST(N'2021-10-20T11:26:08.420' AS DateTime), 1, N'Doctor', 0)
INSERT [dbo].[Users] ([UserId], [UserName], [UserPhone], [UserGender], [UserPassword], [UserDOB], [IsApproved], [UserRole], [ReferenceUserId]) VALUES (5, N'Aleeshaa', N'03433333356', N'Female', N'123456', CAST(N'2018-06-08T00:00:00.000' AS DateTime), 1, N'Doctor', 0)
INSERT [dbo].[Users] ([UserId], [UserName], [UserPhone], [UserGender], [UserPassword], [UserDOB], [IsApproved], [UserRole], [ReferenceUserId]) VALUES (1002, N'Abeeha', N'03433333356', N'Female', N'1234', CAST(N'2020-09-10T00:00:00.000' AS DateTime), 0, N'Doctor', 0)
INSERT [dbo].[Users] ([UserId], [UserName], [UserPhone], [UserGender], [UserPassword], [UserDOB], [IsApproved], [UserRole], [ReferenceUserId]) VALUES (1003, N'Ayesha', N'03433333356', N'Female', N'1234', CAST(N'2020-09-10T00:00:00.000' AS DateTime), 1, N'Doctor', 0)
INSERT [dbo].[Users] ([UserId], [UserName], [UserPhone], [UserGender], [UserPassword], [UserDOB], [IsApproved], [UserRole], [ReferenceUserId]) VALUES (1004, N'Sadaf', N'03433333356', N'Female', N'1234', CAST(N'2020-09-10T00:00:00.000' AS DateTime), 0, N'Doctor', 0)
INSERT [dbo].[Users] ([UserId], [UserName], [UserPhone], [UserGender], [UserPassword], [UserDOB], [IsApproved], [UserRole], [ReferenceUserId]) VALUES (1005, N'Fatima', N'03433333356', N'Female', N'34333', CAST(N'2020-09-10T00:00:00.000' AS DateTime), 1, N'Doctor', 0)
INSERT [dbo].[Users] ([UserId], [UserName], [UserPhone], [UserGender], [UserPassword], [UserDOB], [IsApproved], [UserRole], [ReferenceUserId]) VALUES (1006, N'M Ali', N'03433333356', N'Male', N'34333', CAST(N'2020-09-10T00:00:00.000' AS DateTime), 1, N'Doctor', 0)
INSERT [dbo].[Users] ([UserId], [UserName], [UserPhone], [UserGender], [UserPassword], [UserDOB], [IsApproved], [UserRole], [ReferenceUserId]) VALUES (1007, N'Ahmed', N'03433333356', N'Female', N'34333', CAST(N'2020-09-10T00:00:00.000' AS DateTime), 1, N'Doctor', 0)
INSERT [dbo].[Users] ([UserId], [UserName], [UserPhone], [UserGender], [UserPassword], [UserDOB], [IsApproved], [UserRole], [ReferenceUserId]) VALUES (1008, N'sultan', N'03433333356', N'Female', N'123456', CAST(N'2021-11-08T16:18:09.697' AS DateTime), 1, N'Patient', 1)
INSERT [dbo].[Users] ([UserId], [UserName], [UserPhone], [UserGender], [UserPassword], [UserDOB], [IsApproved], [UserRole], [ReferenceUserId]) VALUES (2002, N'Alia', N'03455522333', N'Male', N'123456', CAST(N'2018-11-12T00:00:00.000' AS DateTime), 0, N'Doctor', 0)
INSERT [dbo].[Users] ([UserId], [UserName], [UserPhone], [UserGender], [UserPassword], [UserDOB], [IsApproved], [UserRole], [ReferenceUserId]) VALUES (2003, N'Osama', N'03222233444', N'Male', N'123456', CAST(N'2020-09-10T00:00:00.000' AS DateTime), 1, N'Doctor', 0)
INSERT [dbo].[Users] ([UserId], [UserName], [UserPhone], [UserGender], [UserPassword], [UserDOB], [IsApproved], [UserRole], [ReferenceUserId]) VALUES (3004, N'Hamza', N'03223322111', N'Male', N'123456', CAST(N'2018-05-12T00:00:00.000' AS DateTime), 1, N'PA', 1)
INSERT [dbo].[Users] ([UserId], [UserName], [UserPhone], [UserGender], [UserPassword], [UserDOB], [IsApproved], [UserRole], [ReferenceUserId]) VALUES (4006, N'Mohsin Khan', N'0345343343', N'Male', N'123456', CAST(N'2020-09-10T00:00:00.000' AS DateTime), 1, N'Patient', 3004)
INSERT [dbo].[Users] ([UserId], [UserName], [UserPhone], [UserGender], [UserPassword], [UserDOB], [IsApproved], [UserRole], [ReferenceUserId]) VALUES (4007, N'Anaya', N'03453333444', N'Female', N'123456', CAST(N'2020-09-10T00:00:00.000' AS DateTime), 1, N'Patient', 3004)
INSERT [dbo].[Users] ([UserId], [UserName], [UserPhone], [UserGender], [UserPassword], [UserDOB], [IsApproved], [UserRole], [ReferenceUserId]) VALUES (4012, N'Iqra Anum', N'03185313366', N'Female', N'123456', CAST(N'2020-09-10T00:00:00.000' AS DateTime), 1, N'Attendant', 3004)
SET IDENTITY_INSERT [dbo].[Users] OFF
GO
SET IDENTITY_INSERT [dbo].[UserTemplate] ON 

INSERT [dbo].[UserTemplate] ([TemplateId], [TemplateText], [TemplateType], [DoctorId]) VALUES (1, N'This is _', 1, 1)
INSERT [dbo].[UserTemplate] ([TemplateId], [TemplateText], [TemplateType], [DoctorId]) VALUES (4, N'_ is eating _', 2, 1)
SET IDENTITY_INSERT [dbo].[UserTemplate] OFF
GO
SET IDENTITY_INSERT [dbo].[WordsCategory] ON 

INSERT [dbo].[WordsCategory] ([CategoryId], [Title], [DoctorId]) VALUES (2, N'Verb', 0)
INSERT [dbo].[WordsCategory] ([CategoryId], [Title], [DoctorId]) VALUES (3, N'Noun', 0)
INSERT [dbo].[WordsCategory] ([CategoryId], [Title], [DoctorId]) VALUES (4, N'Adverb', 0)
SET IDENTITY_INSERT [dbo].[WordsCategory] OFF
GO
SET IDENTITY_INSERT [dbo].[WordsTemplate] ON 

INSERT [dbo].[WordsTemplate] ([WordTemplateId], [WordTemplateText], [TemplateType], [FirstBlankCategoryId], [SecondBlankCategoryId], [DoctorId]) VALUES (1, N'Is On', N'2', 3, 3, 1)
INSERT [dbo].[WordsTemplate] ([WordTemplateId], [WordTemplateText], [TemplateType], [FirstBlankCategoryId], [SecondBlankCategoryId], [DoctorId]) VALUES (2, N'This is', N'1', 3, 0, 1)
INSERT [dbo].[WordsTemplate] ([WordTemplateId], [WordTemplateText], [TemplateType], [FirstBlankCategoryId], [SecondBlankCategoryId], [DoctorId]) VALUES (3, N'It is', N'1', 3, 2, 1)
INSERT [dbo].[WordsTemplate] ([WordTemplateId], [WordTemplateText], [TemplateType], [FirstBlankCategoryId], [SecondBlankCategoryId], [DoctorId]) VALUES (4, N'Is playing', N'2', 3, 2, 1)
SET IDENTITY_INSERT [dbo].[WordsTemplate] OFF
GO
ALTER TABLE [dbo].[Collections] ADD  DEFAULT ((0)) FOR [CategoryId]
GO
