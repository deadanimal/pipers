from datetime import datetime, timedelta

from django.conf import settings
from django.conf.urls import include, url
from django.contrib.gis import admin

from rest_framework.routers import DefaultRouter
from rest_framework_extensions.routers import NestedRouterMixin

from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
    TokenVerifyView
)

from users.views import (MyTokenObtainPairView)



class NestedDefaultRouter(NestedRouterMixin, DefaultRouter):
    pass



router = NestedDefaultRouter()

from campaigns.views import (CampaignViewSet)

campaigns_router = router.register('campaigns', CampaignViewSet)

from commits.views import (CommitViewSet)

commits_router = router.register('commits', CommitViewSet)

from contacts.views import (ContactViewSet)

contacts_router = router.register('contacts', ContactViewSet)

from deployments.views import (DeploymentViewSet)

deployments_router = router.register('deployments', DeploymentViewSet)

from diagrams.views import (DiagramViewSet)

diagrams_router = router.register('diagrams', DiagramViewSet)

from documents.views import (DocumentViewSet)

documents_router = router.register('documents', DocumentViewSet)

from functions.views import (FunctionViewSet)

functions_router = router.register('functions', FunctionViewSet)

from invoices.views import (InvoiceViewSet)

invoices_router = router.register('invoices', InvoiceViewSet)

from maintenances.views import (
    MaintenanceViewSet, 
)

maintenances_router = router.register('maintenances', MaintenanceViewSet)

from meetings.views import (
    MeetingViewSet, 
    MeetingInvitationViewSet)

meetings_router = router.register('meetings', MeetingViewSet)
meetings_router.register('invitations', MeetingInvitationViewSet, basename='meeting-invitations', parents_query_lookups=['meeting'])

from notes.views import (
    NoteViewSet, 
    NoteAttachmentViewSet,
    NoteChartViewSet,
    NoteItemViewSet)

notes_router = router.register('notes', NoteViewSet, basename='note')
notes_router.register('attachments', NoteAttachmentViewSet, basename='notes-attachments', parents_query_lookups=['note'])
notes_router.register('charts', NoteChartViewSet, basename='notes-charts', parents_query_lookups=['note'])
notes_router.register('items', NoteItemViewSet, basename='notes-items', parents_query_lookups=['note'])

from notifications.views import (NotificationViewSet)

notifications_router = router.register('notifications', NotificationViewSet, basename='notification')

from organisations.views import (OrganisationViewSet,)

organisations_router = router.register(
    'organisations', OrganisationViewSet
)

from presentations.views import (
    PresentationViewSet)

presentations_router = router.register('presentations', PresentationViewSet, basename='presentation')

from projects.views import (
    ProjectViewSet)

projects_router = router.register('projects', ProjectViewSet, basename='project')

from quotations.views import (
    QuotationViewSet)

quotations_router = router.register('quotations', QuotationViewSet, basename='quotation')

from submissions.views import (
    SubmissionViewSet,
    SubmissionDocumentViewSet,
    SubmissionTaskViewSet)
    
submissions_router = router.register('submissions', SubmissionViewSet, basename='submission')
submissions_router.register('documents', SubmissionDocumentViewSet, basename='submissions-documents', parents_query_lookups=['submission'])
submissions_router.register('tasks', SubmissionTaskViewSet, basename='submissions-tasks', parents_query_lookups=['submission'])

from tickets.views import (
    TicketViewSet)

tickets_router = router.register('tickets', TicketViewSet, basename='ticket')

from users.views import (CustomUserViewSet)

users_router = router.register(
    'users', CustomUserViewSet
)

from wireframes.views import (
    WireframeViewSet)

wireframes_router = router.register('wireframes', WireframeViewSet, basename='wireframe')


urlpatterns = [

    url('v1/', include(router.urls)),
    url('auth/', include('rest_auth.urls')),
    url('auth/registration/', include('rest_auth.registration.urls')),

    url('auth/token/', MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
    url('auth/refresh/', TokenRefreshView.as_view(), name='token_refresh'),  
    url('auth/token/verify/', TokenVerifyView.as_view(), name='token_verify'),




]