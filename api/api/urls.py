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
from organisations.views import (OrganisationViewSet,)
from users.views import (CustomUserViewSet)


class NestedDefaultRouter(NestedRouterMixin, DefaultRouter):
    pass



router = NestedDefaultRouter()

organisations_router = router.register(
    'organisations', OrganisationViewSet
)

users_router = router.register(
    'users', CustomUserViewSet
)



from meetings.views import (
    MeetingViewSet, 
    MeetingInvitationViewSet)
from notes.views import (
    NoteViewSet, 
    NoteAttachmentViewSet,
    NoteChartViewSet,
    NoteItemViewSet)
from projects.views import (
    ProjectViewSet)

meetings_router = router.register('meetings', MeetingViewSet)
meetings_router.register('invitations', MeetingInvitationViewSet, basename='meeting-invitations', parents_query_lookups=['meeting'])

notes_router = router.register('notes', NoteViewSet, basename='note')
notes_router.register('attachments', NoteAttachmentViewSet, basename='notes-attachments', parents_query_lookups=['note'])
notes_router.register('charts', NoteChartViewSet, basename='notes-charts', parents_query_lookups=['note'])
notes_router.register('items', NoteItemViewSet, basename='notes-items', parents_query_lookups=['note'])

projects_router = router.register('projects', ProjectViewSet, basename='project')


urlpatterns = [

    url('v1/', include(router.urls)),
    url('auth/', include('rest_auth.urls')),
    url('auth/registration/', include('rest_auth.registration.urls')),

    url('auth/token/', MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
    url('auth/refresh/', TokenRefreshView.as_view(), name='token_refresh'),  
    url('auth/token/verify/', TokenVerifyView.as_view(), name='token_verify'),




]