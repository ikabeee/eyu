import { Module } from '@nestjs/common';
import { UniversitiesModule } from './universities/universities.module';
import { ScolarshipsModule } from './scolarships/scolarships.module';
import { MunicipalitiesModule } from './municipalities/municipalities.module';
import { AdminsModule } from './admins/admins.module';
import { UsersModule } from './users/users.module';
import { AnnouncementsModule } from './announcements/announcements.module';
import { StudentsServicesModule } from './students-services/students-services.module';
import { InfrastructureModule } from './infrastructure/infrastructure.module';
import { JobOpportunitiesModule } from './job-opportunities/job-opportunities.module';
import { CareersModule } from './careers/careers.module';
import { SubjectsModule } from './subjects/subjects.module';
import { ExtracurricularActivitiesModule } from './extracurricular-activities/extracurricular-activities.module';
import { LanguageCoursesModule } from './language-courses/language-courses.module';
import { AgreementsModule } from './agreements/agreements.module';
import { EventsListModule } from './events_list/events_list.module';
import { CommentsModule } from './comments/comments.module';
import { AuthModule } from './auth/auth.module';



@Module({
  imports: [UniversitiesModule, ScolarshipsModule, MunicipalitiesModule, AdminsModule, UsersModule, AnnouncementsModule, StudentsServicesModule, InfrastructureModule, JobOpportunitiesModule, CareersModule, SubjectsModule, ExtracurricularActivitiesModule, LanguageCoursesModule, AgreementsModule, EventsListModule, CommentsModule, AuthModule],
})
export class AppModule {}
