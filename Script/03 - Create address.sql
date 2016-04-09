USE [tuServicio]
GO

/****** Object:  Table [dbo].[Address]    Script Date: 4/9/2016 4:47:54 PM ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[Address](
	[adr_id] [int] IDENTITY(1,1) NOT NULL,
	[adr_street] [nvarchar](255) NULL,
	[adr_number] [nvarchar](255) NULL,
	[adr_postal_code] [nvarchar](50) NULL,
	[adr_latitude] [decimal](9, 6) NULL,
	[adr_longitude] [decimal](9, 6) NULL,
	[adr_user_id] [int] NOT NULL,
 CONSTRAINT [PK_Address] PRIMARY KEY CLUSTERED 
(
	[adr_id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO

ALTER TABLE [dbo].[Address]  WITH CHECK ADD  CONSTRAINT [FK_Address_User] FOREIGN KEY([adr_user_id])
REFERENCES [dbo].[User] ([usr_id])
GO

ALTER TABLE [dbo].[Address] CHECK CONSTRAINT [FK_Address_User]
GO


