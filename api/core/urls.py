# core/urls.py
from django.urls import path, include
from rest_framework_jwt.views import obtain_jwt_token
from rest_framework.routers import DefaultRouter

from .views import CreateUserView, DialogsViewSet


router = DefaultRouter()
router.register(r'dialogs', DialogsViewSet)
router.register(r'users', CreateUserView)

urlpatterns = [
    path(r'', include(router.urls)),
    path(r'token-auth/', obtain_jwt_token),
    path(r'dialogs/', DialogsViewSet)
]

'сколько стоит сайт?'
'сколько стоит лендинг?'
'сколько стоит директ?'
'сайт под ключ'
'сколько нужно часов, для того чтобы сделать систему доступов'
'система доступов на криптокошельках'
'и я так понимаю, нужно описание системы доступов'

"Клиент:"
"спецодежда - комарова"
"чай - магазин кофе и чая вв че"
