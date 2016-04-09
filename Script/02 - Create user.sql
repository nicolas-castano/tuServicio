USE [tuServicio]
GO

/****** Object:  Table [dbo].[User]    Script Date: 4/9/2016 4:47:25 PM ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[User](
	[usr_id] [int] IDENTITY(1,1) NOT NULL,
	[usr_first_name] [nvarchar](50) NOT NULL,
	[usr_last_name] [nvarchar](50) NOT NULL,
	[usr_email] [nvarchar](100) NOT NULL,
	[usr_password] [nvarchar](255) NOT NULL,
 CONSTRAINT [PK_User] PRIMARY KEY CLUSTERED 
(
	[usr_id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO


